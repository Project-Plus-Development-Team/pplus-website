import { CSSData } from "./css-types";

export const reorganizeCSSDataForSmallScreen = (
  data: CSSData,
  sizeOfOddRows: number,
  sizeOfEvenRows: number
) => {
  const characters = data.flat();

  return characters.reduce<CSSData>((prev, cur) => {
    const lastRow = prev[prev.length - 1];

    const oddRow = prev.length % 2 === 1;
    if (lastRow.length >= (oddRow ? sizeOfOddRows : sizeOfEvenRows)) {
      prev.push([cur]);
    } else {
      lastRow.push(cur);
    }

    return prev;
  }, [[]]);
};