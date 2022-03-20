import { MouseEventHandler } from "react";
import characterCommunityData from "../../data/character-communities.json";
import { useViewportWidth } from "../../lib/use-viewport-width";
import { CSSBig } from "./css-components/CSSBig";
import { CSSMedium } from "./css-components/CSSMedium";
import { CSSSmall } from "./css-components/CSSSmall";

import styles from "./css.module.scss";

interface Props {
  characterDiscordMap: Record<string, string>
}

const getCSSVariant = (width: number) => {
  if (width > 1024) {
    return CSSBig;
  }

  if (width > 800) {
    return CSSMedium;
  }

  return CSSSmall;
};

export const CSSMain = ({ characterDiscordMap }: Props) => {
  const randomHandler: MouseEventHandler = event => {
    event.preventDefault();
    const allDiscordInvites = Object.values(characterDiscordMap);
    const randomIndex = Math.floor(Math.random() * allDiscordInvites.length);
    const randomDiscord = "https://discord.gg/" + allDiscordInvites[randomIndex];
    window.open(randomDiscord);
  };

  const CSSVariant = getCSSVariant(useViewportWidth());

  return (
    <div className={styles.css_main}>
      <CSSVariant 
        characterCommunityData={characterCommunityData}
        characterDiscordMap={characterDiscordMap}
        randomHandler={randomHandler}
      />
    </div>
  );
};