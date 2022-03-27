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

  return (
    <a
      href={character.isRandom ? "#" : `https://discord.gg/${character.discordInviteId}`}
      onClick={event => {
        if (character.isRandom) {
          randomHandler(event);
        }
      }}
      title={`${character.name} Discord`}
      className={styles.button}
      style={{
        // @ts-ignore
        "--meta": `url(/images/generated/q9283rw8fg/css/${character.img}.webp)`
      }}
    >
      {image && (
        <GoodImage
          img={image}
          alt={character.name}
        />
      )}
    </a>
  );
};