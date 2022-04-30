/* eslint-disable sonarjs/no-duplicate-string */
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
  faNoteSticky,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { convertSheetToObjects } from "next-server-utilities/convert-sheet-to-objects";
import { getSpreadsheet } from "next-server-utilities/get-spreadsheet";
import { Map, Overlay } from "pigeon-maps";
import { useState } from "react";
import { Heading } from "react-bulma-components";
import { A11tySwitch } from "shared/components/A11tyText";
import { DiscordButton } from "shared/components/DiscordButton";
import { FAButton } from "shared/components/FAButton";
import { MapWrapper } from "shared/components/MapWrapper";

interface Player {
  name: string;
  discordTag: string;
  character: null | {
    name: string;
    skinIndex: number;
  };
  anchor: [number, number];
  note: string;
}

interface Props {
  players: Player[];
}

const CharacterImage = ({ character }: { character: Player["character"] }) => {
  const [error, setError] = useState(false);

  if (error) {
    console.log("error", error);
  }

  const src = `/resources/characters/${
    character === null
      ? "question-mark"
      : character.name + "/icons/" + String(character.skinIndex)
  }.png`;

  return (
    <img
      src={src}
      style={{
        backgroundColor: error ? "black" : undefined,
        textTransform: "capitalize",
        fontWeight: "bold",
        color: "black",
        textShadow: "0 0 10px white",
        fontSize: "1.2em",
        lineHeight: 0.8,
      }}
      alt={character === null ? "Unknown or missing character" : character.name}
      width={50}
      onError={console.log}
      onLoad={() => setError(false)} // during dev, it could be that an image has an error but gets loaded after a change
    />
  );
};

const description =
  "This map helps players in Europe to connect with each other, find good Netplay connections, and host tournaments.";

const EuropeanPlayerMap = ({ players }: Props) => {
  return (
    <main>
      <NextSeo title="European Player Map" description={description} />
      <Heading>European Project+ and Project M player map</Heading>
      <Heading subtitle>{description}</Heading>
      <div className="gap is-flex-wrap-wrap">
        <DiscordButton inviteId="SNRKKYV" text="EU P+ & PM Discord" />
        <div>
          <FAButton
            href="https://docs.google.com/forms/d/e/1FAIpQLSfD8i3BcYQ5dYt6DwECHH2JBSieSxm2EGa7snhxy0wARJ53PA/viewform"
            renderAs="a"
            icon={faRightToBracket}
            style={{
              whiteSpace: "break-spaces",
              width: "100%",
            }}
            aria-describedby="submit-entry-description"
          >
            Submit entry
          </FAButton>
          <p id="submit-entry-description">
            Links to Google Forms and requires a Google account
          </p>
        </div>
      </div>
      <MapWrapper>
        <Map height={600} defaultCenter={[50, 5]} defaultZoom={4}>
          {players
            .sort((a, b) => (b.anchor[0] < a.anchor[0] ? -1 : 0)) // render lower overlays later in DOM as a fix for no z-index in SVG (for tooltips)
            .map((p) => (
              <Overlay
                key={p.name + String(p.anchor[0]) + String(p.anchor[1])}
                anchor={p.anchor}
                offset={[25, 25]}
                className="popover popover-trigger"
                // [a11y] https://github.com/mariusandra/pigeon-maps/issues/158
              >
                <div className="popover-content">
                  <p>{p.name}</p>
                  {p.discordTag && (
                    <p>
                      <A11tySwitch
                        visible={
                          <>
                            <FontAwesomeIcon icon={faDiscord} />
                            {" " + p.discordTag}
                          </>
                        }
                        screenReader={`Tag on Discord: ${p.discordTag}`}
                      />
                    </p>
                  )}
                  {p.note && (
                    <p>
                      <A11tySwitch
                        visible={
                          <>
                            <FontAwesomeIcon icon={faNoteSticky} />
                            {" " + p.note}
                          </>
                        }
                        screenReader={`Note: ${p.note}`}
                      />
                    </p>
                  )}
                </div>
                <CharacterImage character={p.character} />
              </Overlay>
            ))}
        </Map>
      </MapWrapper>
      <p>
        Special thanks to Efisio for helping me out with setting up the stock
        icons for this map.
      </p>
      <p>
        Check out the data source for this map:{" "}
        <a href="https://docs.google.com/spreadsheets/d/1QGtZNAxhIp5W-XKELKgp4uaScbUcABNbvTOLniUFlkU/edit#gid=1883444078">
          projectplusgame.com data source on Google Docs
        </a>
      </p>
    </main>
  );
};

export default EuropeanPlayerMap;

interface RawPlayer {
  "Player tag": string;
  "Discord tag": string;
  "Should your Discord tag be on the map?": "Yes" | "No";
  "Latitude of your marker on the map": string;
  "Longitude of your marker on the map": string;
  "Your main character": string;
  "Your character's skin in P+": string;
  "Note": string;
}

const characterNameMap = {
  zerosuitsamus: "zero-suit-samus",
};

const getCharacter = (userInput: string) => {
  const testable = userInput
    .trim()
    .toLowerCase()
    .replaceAll(" ", "")
    .replaceAll(".", "");

  if (testable === "zss") {
    return "zerosuitsamus";
  }
};

const getCharacterBeta = (userInput: string) => {
  if (userInput.toLowerCase() === "zss") {
    return "zero-suit-samus";
  }

  if (userInput.toLowerCase() === "ganon") {
    return "ganondorf";
  }

  if (userInput.toLowerCase() === "metaknight") {
    return "meta-knight";
  }

  if (userInput.toLowerCase() === "mk") {
    return "meta-knight";
  }

  if (userInput.toLowerCase() === "m2") {
    return "mewtwo";
  }

  if (userInput.toLowerCase() === "toonlink") {
    return "toon-link";
  }

  if (userInput.toLowerCase() === "tink") {
    return "toon-link";
  }

  if (userInput.toLowerCase() === "zard") {
    return "charizard";
  }

  if (userInput.toLowerCase() === "ivy") {
    return "ivysaur";
  }

  if (userInput.toLowerCase() === "r.o.b.") {
    return "rob";
  }

  if (userInput.toLowerCase() === "mr game & watch") {
    return "mr-game-and-watch";
  }

  if (userInput.toLowerCase() === "mr. game & watch") {
    return "mr-game-and-watch";
  }

  if (userInput.toLowerCase() === "dedede") {
    return "king-dedede";
  }

  if (userInput.toLowerCase() === "cf") {
    return "captain-falcon";
  }

  if (userInput.toLowerCase() === "falcon") {
    return "captain-falcon";
  }

  if (userInput.toLowerCase() === "gnw") {
    return "mr-game-and-watch";
  }

  if (userInput.toLowerCase() === "g&w") {
    return "mr-game-and-watch";
  }

  if (userInput.toLowerCase() === "gaw") {
    return "mr-game-and-watch";
  }

  return userInput.toLowerCase().replace(" ", "-");
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const values = await getSpreadsheet("eu-players");

  const rawPlayers = convertSheetToObjects<RawPlayer>(
    values[0],
    values.slice(1)
  ).filter(
    (p) =>
      p["Player tag"].trim() !== "" &&
      p["Latitude of your marker on the map"].trim() !== "" &&
      p["Longitude of your marker on the map"].trim() !== ""
  );

  const players = rawPlayers.map<Player>((p) => {
    const characterName = getCharacterBeta(p["Your main character"]);

    const character =
      characterName.trim() === ""
        ? null
        : {
            name: characterName,
            skinIndex: Number.parseInt(
              p["Your character's skin in P+"] || "1",
              10
            ),
          };

    return {
      name: p["Player tag"],
      discordTag: p["Discord tag"],
      character,
      anchor: [
        Number.parseFloat(p["Latitude of your marker on the map"]),
        Number.parseFloat(p["Longitude of your marker on the map"]),
      ],
      note: p.Note.trim(),
    };
  });

  return {
    props: {
      players,
    },
  };
};
