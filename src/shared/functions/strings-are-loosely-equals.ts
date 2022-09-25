export const stringsAreLooselyEquals = (textA: string, textB: string) => {
  const textALoose = textA.trim().toLowerCase();
  const textBLoose = textB.trim().toLowerCase();
  return textALoose === textBLoose;
};