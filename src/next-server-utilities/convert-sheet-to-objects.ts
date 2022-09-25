export const convertSheetToObjects = <T extends {}>(
  headerRow: string[],
  rows: string[][]
): T[] => (
  rows
    .map(row => (
      headerRow.reduce((prev, cur, index) => {
        return {
          ...prev,
          [cur]: row[index] ?? ""
        };
      }, {}) as T
    ))
);