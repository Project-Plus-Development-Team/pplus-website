import { MouseEventHandler } from "react";
import { GoodImage } from "shared/components/GoodImage";
import { CSSCharacter } from "../css-types";

import images from "~capsules/css";
import styles from "../CSSMain.module.scss";

interface Props {
  character: CSSCharacter
  randomHandler: MouseEventHandler
}

export const CSSButton = ({ character, randomHandler }: Props) => {
  if (!(character.img in images)) {
    throw new Error(`Couldn't find ${character.name} in generated CSS images`);
  }

  const image = images[character.img as keyof typeof images];

  const imageElement = image && (
    <GoodImage
      img={image}
      alt={character.name}
      aria-hidden
    />
  );

  if (character.isRandom) {
    return (
      <button
        onClick={randomHandler}
        title="Random Discord"
        className={`${styles.button} link-button`}
        style={{
          // @ts-ignore
          "--meta": `url(/images/generated/q9283rw8fg/css/${character.img}.webp)`
        }}
      >
        {imageElement}
        <span className="is-sr-only">
          Random Character Discord
        </span>
      </button>
    );
  }

  return (
    <a
      href={`https://discord.com/invite/${character.discordInviteId}`}
      className={styles.button}
      style={{
        // @ts-ignore
        "--meta": `url(/images/generated/q9283rw8fg/css/${character.img}.webp)`
      }}
    >
      {imageElement}
      <span className="is-sr-only">
        {character.name} Discord
      </span>
    </a>
  );
};