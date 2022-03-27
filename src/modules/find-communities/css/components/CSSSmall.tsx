import { CSSProps } from "../css-types";
import { reorganizeCSSDataForSmallScreen } from "../reorganize-data";
import { CSSRow } from "./CSSRow";

export const CSSSmall = ({
  characterDiscordMap,
  randomHandler,
  characterCommunityData
}: CSSProps) => (
  <>
    {reorganizeCSSDataForSmallScreen(characterCommunityData, 2, 3)
      .map((row, rowIndex) => (
        <CSSRow row={row} key={rowIndex} characterDiscordMap={characterDiscordMap} randomHandler={randomHandler}/>
      ))
    }
  </>
);