import { stringsAreLooselyEquals } from "shared/functions/strings-are-loosely-equals";

export const supportedMods = {
  "P+": {
    longName: "Project+",
    image: "/images/generated/favicon.webp"
  },
  "T+": {
    longName: "Tournament Addition",
    image: "/images/generated/communities/tournament-addition.webp",
  },
  "PM": {
    longName: "Project M",
    image: "/images/generated/communities/project-m.webp",
  }
} as const;

export type ShortModNames = keyof typeof supportedMods
type LongNames = (typeof supportedMods)[ShortModNames]["longName"];

export type SupportedModInStreamTitle = ShortModNames | LongNames;

export const shortModNames = Object.keys(supportedMods) as ShortModNames[];
const longNames = Object.values(supportedMods).map(m => m.longName);

export const supportedModsArray = [...shortModNames, ...longNames];

export const getModShortNameBySupportedModInStreamTitle = (
  supportedModInStreamTitle: SupportedModInStreamTitle
): ShortModNames|null => {
  const maybeValidShortName = shortModNames.find(
    short => stringsAreLooselyEquals(short, supportedModInStreamTitle)
  );

  if (maybeValidShortName) {
    return maybeValidShortName;
  }

  const foundTouple = Object.entries(supportedMods).find(([, value]) => (
    stringsAreLooselyEquals(value.longName, supportedModInStreamTitle)
  ));

  if (foundTouple === undefined) {
    return null;
  }

  return foundTouple[0] as ShortModNames;
};