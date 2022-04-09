import { getModDataFromTitle } from "./streams-functions";
import { TwitchStreamI } from "./twitch-api";

// an object can both be read as a type and as an array
// using Object.keys()
const supportedModsObject = {
  "p+": true,
  "t+": true,
  "pm": true
};

export type SupportedMod = keyof typeof supportedModsObject;
export const supportedMods = Object.keys(supportedModsObject) as SupportedMod[];

const makeComparable = (text: string) => (
  text.trim().toLowerCase()
);

export const streamIsSupportedMod = (streamTitle: string): boolean => {
  const trimmedLowerCaseTitle = makeComparable(streamTitle);

  for (const mod of Object.keys(supportedModsObject)) {
    if (trimmedLowerCaseTitle.startsWith(`[${mod}]`)) {
      return true;
    }
  }

  return false;
};

export type StreamFilter = SupportedMod | null

export const streamMatchesFilter = (
  stream: TwitchStreamI,
  filter: StreamFilter
): boolean => {
  if (filter === null) {
    return true;
  }

  const { mod } = getModDataFromTitle(stream.title);
  return makeComparable(mod ?? "") === filter;
};