import { CSSProps } from "./css-props";
import { CSSRow } from "./CSSRow";
import { reorganizeCSSDataForSmallScreen } from "./reorganize-data";

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