import { CSSProps } from "../css-types";
import { CSSRow } from "./CSSRow";

export const CSSBig = ({
  characterCommunityData,
  characterDiscordMap,
  randomHandler
}: CSSProps) => (
  <>
    {characterCommunityData.map((row, rowIndex) => (
      <CSSRow
        row={row}
        key={rowIndex}
        characterDiscordMap={characterDiscordMap}
        randomHandler={randomHandler}
      />
    ))}
  </>
);