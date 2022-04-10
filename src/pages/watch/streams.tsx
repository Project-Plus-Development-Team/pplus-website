import { GetStaticProps } from "next";
import { ChangeEventHandler, useState } from "react";
import { TwitchStream } from "modules/watch/streams/TwitchStream";
import { Placeholder } from "shared/components/Placeholder";
import { FAButton } from "shared/components/FAButton";
import { faCircleQuestion, faMagnifyingGlass, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { Form, Heading, Modal } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StreamFilter, streamMatchesFilter } from "modules/watch/streams/functions/stream-filter";
import { useStreams } from "modules/watch/streams/hooks/use-streams";
import { NextSeo } from "next-seo";
import { ShortModNames, shortModNames } from "modules/watch/streams/mod-data";
import { HelpModalContent } from "modules/watch/streams/HelpModalContent";

interface Props {
  isDev: boolean
}

const Home = ({ isDev }: Props) => {
  const { streams, error, isLoading, reload, isOnCooldown } = useStreams(isDev);
  const [filter, setFilter] = useState<StreamFilter>(null);
  const [showModal, setShowModal] = useState(true);

  const handleRadio: ChangeEventHandler<HTMLInputElement> = event => {
    if (event.target.value === "all") {
      setFilter(null);
      return;
    }

    setFilter(event.target.value as ShortModNames);
  };

  return (
    <main>
      <NextSeo
        title="Watch Twitch Streams"
        description="Watch Twitch Streams of Project+, Project M, and more mods!"
      />

      <Modal show={showModal} closeOnBlur onClose={() => setShowModal(false)}>
        <HelpModalContent/>
      </Modal>

      <Heading size={2} className="is-flex is-justify-content-space-between is-align-items-center is-flex-wrap-wrap gap">
        <span>Twitch Streams</span>
        <span style={{ fontSize: "1rem" }} className="is-flex gap">
          <Form.Radio value="all" checked={filter === null} onChange={handleRadio}>All</Form.Radio>
          {shortModNames.map(mod => (
            <Form.Radio
              key={mod}
              value={mod}
              checked={filter === mod}
              onChange={handleRadio}
            >
              {mod} only
            </Form.Radio>
          ))}
        </span>
        <div className="is-flex gap">
          <FAButton
            icon={faCircleQuestion}
            onClick={() => setShowModal(true)}
            size="small"
          >
            How to appear here
          </FAButton>
          <FAButton
            icon={faRefresh}
            onClick={reload}
            disabled={isOnCooldown}
            size="small"
          >
            Refresh
          </FAButton>
        </div>
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
            className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center has-text-centered"
            style={{ height: 300, padding: "1rem" }}
          >
            <Heading size={2}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-3"/>
              No livestreams found.
            </Heading>
            <button className="link-button" onClick={() => setShowModal(true)}>
              <Heading size={3} subtitle>Click here to find out how to get listed</Heading>
            </button>
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