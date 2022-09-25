import { MouseEventHandler } from "react";
import characterCommunityData from "./character-communities.json";
import { useViewport } from "shared/hooks/use-viewport";
import { CSSBig } from "./components/CSSBig";
import { CSSMedium } from "./components/CSSMedium";
import { CSSSmall } from "./components/CSSSmall";

import styles from "./CSSMain.module.scss";

export interface CSSMainProps {
  characterDiscordMap: Record<string, string>
}

const getCSSVariant = () => {
  const { isDesktop, isTablet } = useViewport();

  if (isDesktop) {
    return CSSBig;
  }

  if (isTablet) {
    return CSSMedium;
  }

  return CSSSmall;
};

export const CSSMain = ({ characterDiscordMap }: CSSMainProps) => {
  const randomHandler: MouseEventHandler = event => {
    event.preventDefault();
    const allDiscordInvites = Object.values(characterDiscordMap);
    const randomIndex = Math.floor(Math.random() * allDiscordInvites.length);
    const randomDiscord = "https://discord.com/invite/" + allDiscordInvites[randomIndex];
    window.open(randomDiscord);
  };

  const CSSVariant = getCSSVariant();

  return (
    <div className={`${styles.css_main} css-main`}>
      <CSSVariant 
        characterCommunityData={characterCommunityData}
        characterDiscordMap={characterDiscordMap}
        randomHandler={randomHandler}
      />
    </div>
  );
};