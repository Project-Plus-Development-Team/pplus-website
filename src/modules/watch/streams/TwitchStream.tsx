import { Box, Heading } from "react-bulma-components";
import { getModDataFromTitle, getThumbnailUrl } from "./streams-functions";
import { TwitchStreamI } from "./twitch-api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faXmark } from "@fortawesome/free-solid-svg-icons";
import { ModLogo } from "./ModLogo";
import { useState } from "react";
import { FAButton } from "shared/components/FAButton";
import { useViewport } from "shared/hooks/use-viewport";

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
  const { mod, title } = getModDataFromTitle(stream.title);
  const [play, setPlay] = useState(false);
  const embedWidth = useEmbedWidth();

  return (
    <Box key={stream.id}>
      <Heading
        size={3}
        className="mb-2 is-flex is-justify-content-space-between is-align-items-center gap"
        style={{ minHeight: 30 }}
      >
        <a
          className={`gap has-text-white ${styles.heading}`}
          title="Click to watch on Twitch.tv"
          href={`https://twitch.tv/${stream.user_login}`}
        >
          <ModLogo mod={mod}/>
          {title}
          <span className="ml-1" style={{ fontWeight: "normal" }}>
            by {stream.user_name}
          </span>
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
        />
      ) : (
        <a
          href="#"
          onClick={event => {
            event.preventDefault();
            setPlay(true);
          }}
          title="Click to watch in embedded Twitch player"
        >
          <img
            src={getThumbnailUrl(stream.thumbnail_url)}
            style={{
              width: "100%",
              maxHeight: 300,
              objectFit: "cover",
              display: "block"
            }}
          />
        </a>
      )}
    </Box>
  );
};