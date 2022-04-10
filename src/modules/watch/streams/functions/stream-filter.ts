import { getShortModNameOfStream } from "./get-mod-of-stream";
import { getModShortNameBySupportedModInStreamTitle, ShortModNames } from "../mod-data";
import { TwitchStreamI } from "../twitch-api";
import { stringsAreLooselyEquals } from "shared/functions/strings-are-loosely-equals";

export type StreamFilter = ShortModNames | null

export const streamMatchesFilter = (
  stream: TwitchStreamI,
  filter: StreamFilter
): boolean => {
  if (filter === null) {
    return true;
  }

  const mod = getShortModNameOfStream(stream);

  if (mod === null) {
    return false;
  }

  const shortName = getModShortNameBySupportedModInStreamTitle(mod);

  if (shortName === null) {
    return false;
  }

  return stringsAreLooselyEquals(shortName, filter);
};