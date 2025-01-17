import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MapWrapper } from "app/components/MapWrapper";
import { convertSheetToObjects, getSpreadsheet } from "app/google-sheets";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { LazyEUMap } from "./LazyEUMap";

const getCharacterBeta = (userInput: string) => {
	const cleaned = userInput.toLowerCase().trim();

	const conversionMatch = Object.entries(conversionMap).find(([, values]) =>
		values.find((v) => v === cleaned)
	);

	if (conversionMatch === undefined) {
		return cleaned.replaceAll(" ", "-");
	}

	return conversionMatch[0];
};

export interface Player {
	name: string;
	discordTag: string;
	character: null | {
		name: string;
		skinIndex: number;
	};
	anchor: [number, number];
	note: string;
}

const description =
	"This map helps players in Europe to connect with each other, find good Netplay connections, and host tournaments.";

export const metadata: Metadata = {
	title: "European Player Map",
	description,
};

export default async function EuropeanPlayerMap() {
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

	return (
		<main>
			<h1 className="title">
				European Project+ and Project M player map
			</h1>
			<h1 className="subtitle">{description}</h1>
			<div className="gap is-flex-wrap-wrap is-align-items-start">
				<a
					href="https://discord.com/invite/SNRKKYV"
					className="button is-discord"
				>
					<FontAwesomeIcon
						icon={faDiscord}
						className="mr-2"
						fixedWidth
					/>
					<span>EU P+ & PM Discord</span>
				</a>

				<div>
					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLSfD8i3BcYQ5dYt6DwECHH2JBSieSxm2EGa7snhxy0wARJ53PA/viewform"
						className="button"
						style={{
							whiteSpace: "break-spaces",
							width: "100%",
						}}
						aria-describedby="submit-entry-description"
					>
						<FontAwesomeIcon
							icon={faRightToBracket}
							className="mr-2"
							fixedWidth
						/>
						<span>Submit entry</span>
					</a>
					<p id="submit-entry-description">
						Links to Google Forms and requires a Google account
					</p>
				</div>
			</div>

			<MapWrapper>
				<LazyEUMap players={players} />
			</MapWrapper>

			<p>
				Special thanks to Efisio for helping me out with setting up the
				stock icons for this map.
			</p>
			<p>
				Check out the data source for this map:{" "}
				<a href="https://docs.google.com/spreadsheets/d/1QGtZNAxhIp5W-XKELKgp4uaScbUcABNbvTOLniUFlkU/edit#gid=1883444078">
					projectplusgame.com data source on Google Docs
				</a>
			</p>
		</main>
	);
}

interface RawPlayer {
	"Player tag": string;
	"Discord tag": string;
	"Should your Discord tag be on the map?": "Yes" | "No";
	"Latitude of your marker on the map": string;
	"Longitude of your marker on the map": string;
	"Your main character": string;
	"Your character's skin in P+": string;
	Note: string;
}

// TODO change the names of the public/resources/characters folders to not include hyphens
// because then we can just rip out all hyphens and spaces and dots from the user input for higher chance of matches

const conversionMap = {
	"zero-suit-samus": ["zss"],
	ganondorf: ["ganon"],
	"meta-knight": ["metaknight", "mk"],
	mewtwo: ["m2"],
	"toon-link": ["toonlink", "tink"],
	charizard: ["zard"],
	ivysaur: ["ivy"],
	rob: ["r.o.b.", "r.o.b"],
	"mr-game-and-watch": [
		"mr game & watch",
		"mr. game & watch",
		"gnw",
		"g&w",
		"gaw",
	],
	"king-dedede": ["dedede", "kingdedede"],
	"captain-falcon": ["cf", "falcon"],
};
