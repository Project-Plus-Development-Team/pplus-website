import { CSSProps } from "./css-props";
import { CSSRow } from "./CSSRow";
import { reorganizeCSSDataForSmallScreen } from "./reorganize-data";

export const CSSMedium = ({
  characterDiscordMap,
  randomHandler,
  characterCommunityData
}: CSSProps) => (
  <>
    {reorganizeCSSDataForSmallScreen(characterCommunityData, 5, 6)
      .map((row, rowIndex) => (
        <CSSRow row={row} key={rowIndex} characterDiscordMap={characterDiscordMap} randomHandler={randomHandler}/>
      ))
    }
  </>
);