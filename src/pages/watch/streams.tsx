import { GetStaticProps } from "next";
import { ChangeEventHandler, useState } from "react";
import { TwitchStream } from "modules/watch/streams/TwitchStream";
import { Placeholder } from "shared/components/Placeholder";
import { FAButton } from "shared/components/FAButton";
import { faMagnifyingGlass, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { Form, Heading } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StreamFilter, streamMatchesFilter, SupportedMod, supportedMods } from "modules/watch/streams/supported-mods";
import { useStreams } from "modules/watch/streams/use-streams";

interface Props {
  isDev: boolean
}

const Home = ({ isDev }: Props) => {
  const { streams, error, isLoading, reload, isOnCooldown } = useStreams(isDev);
  const [filter, setFilter] = useState<StreamFilter>(null);

  const handleRadio: ChangeEventHandler<HTMLInputElement> = event => {
    if (event.target.value === "all") {
      setFilter(null);
      return;
    }

    setFilter(event.target.value as SupportedMod);
  };

  return (
    <main>
      <Heading size={2} className="is-flex is-justify-content-space-between is-align-items-center is-flex-wrap-wrap gap">
        <span>Twitch Streams</span>
        <span style={{ fontSize: "1rem" }} className="is-flex gap">
          <Form.Radio value="all" checked={filter === null} onChange={handleRadio}>All</Form.Radio>
          {supportedMods.map(mod => (
            <Form.Radio
              key={mod}
              value={mod}
              checked={filter === mod}
              onChange={handleRadio}
            >
              {mod.toUpperCase()} only
            </Form.Radio>
          ))}
        </span>
        <FAButton
          icon={faRefresh}
          onClick={reload}
          disabled={isOnCooldown}
          size="small"
        >
          Refresh
        </FAButton>
      </Heading>
      <Heading size={3} subtitle className="has-text-info">
        To show up on this page, stream on twitch.tv with the Super Smash Bros. Brawl category
        and add one of the supported tags to the start of your stream title.
        <br/>
        Currently supported: {supportedMods.map(m => `[${m}]`.toUpperCase()).join(", ")}, more to come.
      </Heading>
      {(error !== null || isLoading) ? (
        <Placeholder
          height={300}
          isLoading={isLoading}
          error={error}
          retry={reload}
        >
          Loading streams...
        </Placeholder>
      ) : (
        streams.length === 0 ? (
          <div
            className="is-flex is-justify-content-center is-align-items-center"
            style={{ height: 300 }}
          >
            <Heading size={2}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-3"/>
              There are no currently supported streams online.
            </Heading>
          </div>
        ) : (
          <>
            {streams
              .filter(stream => streamMatchesFilter(stream, filter))
              .map(stream => (
                <TwitchStream
                  key={stream.id}
                  stream={stream}
                  isDev={isDev}
                />
              )
            )}
          </>
        )
      )}
    </main>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      isDev: process.env.NODE_ENV === "development"
    }
  };
};