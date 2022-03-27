import { useEffect, useRef, useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import styles from "./YouTubePlayer.module.scss";

interface Props {
  id: string
  title: string
}

const useKindaLazyYouTubeThumbnail = () => {
  const [imgRes, setImgRes] = useState<"mqdefault" | "maxresdefault">("mqdefault");

  useEffect(() => {
    setTimeout(() => {
      setImgRes("maxresdefault");
    }, 5000);
  }, []);

  return imgRes;
};

const useEmbedOverlay = () => {
  const [showEmbedOverlay, setShowEmbedOverlay] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const activateEmbed = () => {
    setShowEmbedOverlay(false);
    wrapperRef.current?.querySelector<HTMLElement>(".yt-lite")?.click();
  };

  return {
    showEmbedOverlay,
    activateEmbed,
    wrapperRef
  };
};

export const YouTubePlayer = ({ id, title }: Props) => {
  const { showEmbedOverlay, activateEmbed, wrapperRef } = useEmbedOverlay();
  const imgRes = useKindaLazyYouTubeThumbnail();

  return (
    <div className={styles.embed_wrapper} ref={wrapperRef}>
      <div
        className={styles.embed_overlay}
        onClick={activateEmbed}
        style={{
          display: showEmbedOverlay ? "flex" : "none"
        }}
      >
        <i className="fa-solid fa-play"/>
        <span className={styles.embed_hover}>
          Click to load YouTube Player
        </span>
      </div>
      <LiteYouTubeEmbed
        title={title}
        poster={imgRes}
        id={id}
        wrapperClass={`yt-lite ${styles.embed}`}
        webp
        iframeClass={styles.iframe}
      />
    </div>
  );
};