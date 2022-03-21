import { MouseEventHandler } from "react";
import { CSSButton } from "./CSSButton";

import styles from "../css.module.scss";
import { CSSEntry } from "types/find-communities-data";

export const CSSRow = ({
  row, characterDiscordMap, randomHandler
}: {
  row: CSSEntry[], characterDiscordMap: Record<string, string>
  randomHandler: MouseEventHandler
}) => (
  <div className={styles.row}>
    {row.map(charWithoutInvite => {
      const discordInviteId = characterDiscordMap[charWithoutInvite.name];

      if (discordInviteId === undefined && !charWithoutInvite.isRandom) {
        throw new Error(`Missing Discord invite id for "${charWithoutInvite.name}"`);
      }

      const charWithInvite = {
        ...charWithoutInvite,
        discordInviteId: characterDiscordMap[charWithoutInvite.name]
      };

      return (
        <CSSButton
          key={charWithoutInvite.img}
          character={charWithInvite}
          randomHandler={randomHandler}
        />
      );
    })}
  </div>
);