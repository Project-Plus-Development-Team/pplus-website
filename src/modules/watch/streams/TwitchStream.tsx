import { Box, Heading } from "react-bulma-components";
import { TwitchStreamI } from "./twitch-api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faXmark } from "@fortawesome/free-solid-svg-icons";
import { ModLogo } from "./ModLogo";
import { useState } from "react";
import { FAButton } from "shared/components/FAButton";
import { useViewport } from "shared/hooks/use-viewport";
import { getThumbnailUrl } from "./functions/get-thumbnail-url";
import { useMod } from "./hooks/use-mod";

import styles from "modules/watch/streams/Streams.module.scss";

const useEmbedWidth = () => {
  const { width, isMobile, isTablet, isWidescreen } = useViewport();

  if (isMobile || isTablet) {
    return (width * 9 / 16) - 25; // approximation but works
  }

  return isWidescreen ? 720 : 500;
};

interface Props {
  stream: TwitchStreamI
  isDev: boolean
}

export const TwitchStream = ({ stream, isDev }: Props) => {
  const mod = useMod(stream);
  const [play, setPlay] = useState(false);
  const embedWidth = useEmbedWidth();

  return (
    <Box
      key={stream.id}
      style={{
        paddingTop: "0.9em",
        paddingBottom: "0.9em"
      }}
    >
      <Heading
        size={3}
        className="mb-2 is-flex is-align-items-center gap"
        style={{ minHeight: 30 }}
      >
        <ModLogo mod={mod}/>
        <a
          className={`has-text-white is-flex-grow-1 ${styles.heading}`}
          title="Click to watch on Twitch.tv"
          href={`https://twitch.tv/${stream.user_login}`}
        >
          {stream.title}
          {" "}
          <em style={{ fontWeight: "normal" }}>
            streamed by {stream.user_name}
          </em>
          <span className="is-sr-only">Click to watch on Twitch.tv</span>
        </a>
        {play ? (
          <FAButton
            icon={faXmark}
            onClick={() => setPlay(false)}
            size="small"
          >
            Close
          </FAButton>
        ) : (
          <span title="Number of viewers on Twitch" style={{ whiteSpace: "nowrap" }}>
            <FontAwesomeIcon icon={faUserAlt} className="mr-2"/>
            {stream.viewer_count}
          </span>
        )}
      </Heading>

      {play ? (
        <iframe
          src={`https://player.twitch.tv/?channel=${stream.user_login}&parent=${isDev ? "localhost" : "projectplusgame.com"}`}
          frameBorder={0}
          allowFullScreen
          scrolling="no"
          width="100%"
          height={embedWidth}
          title="Embedded Twitch Livestream Player"
        />
      ) : (
        <button
          onClick={event => {
            event.preventDefault();
            setPlay(true);
          }}
          title="Click to watch in embedded Twitch player"
          className="link-button"
          style={{
            width: "100%",
          }}
        >
          <img
            src={getThumbnailUrl(stream.thumbnail_url)}
            style={{
              width: "100%",
              maxHeight: 300,
              objectFit: "cover",
            }}
          />
        </button>
      )}
    </Box>
  );
};