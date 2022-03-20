import { MouseEventHandler } from "react";
import { CSSCharacter } from "../../../types/css-character";

import styles from "../css.module.scss";

interface Props {
  character: CSSCharacter
  randomHandler: MouseEventHandler
}

export const CSSButton = ({ character, randomHandler }: Props) => {
  return (
    <a
      href={character.isRandom ? "#" : `https://discord.gg/${character.discordInviteId}`}
      onClick={event => {
        if (character.isRandom) {
          randomHandler(event);
        }
      }}
      title={`${character.name} Discord`}
      target="_blank"
      className={styles.button}
    >
      <img
        src={`./images/generated/css/${character.img}.webp`}
        alt={character.name}
      />
    </a>
  );
};