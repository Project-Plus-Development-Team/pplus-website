import { getModShortNameBySupportedModInStreamTitle, ShortModNames, SupportedModInStreamTitle, supportedMods, supportedModsArray } from "../mod-data";
import { TwitchStreamI } from "../twitch-api";

/**
 * From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
 */
 const escapeForRegex = (text: string) => (
  text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
);

const modRegexModPattern = supportedModsArray.map(escapeForRegex).join("|");

const allowedSurroundCharacters = ["\\s", "\\[", "\\]", "\\(", "\\)", "\\{", "\\}"];

const surroundCharactersRegexPattern = allowedSurroundCharacters.join("|");

const supportedModInStreamTitleRegex = new RegExp(
  `(?<=^|${surroundCharactersRegexPattern})(${modRegexModPattern})(?=$|${surroundCharactersRegexPattern})`,
  "i"
);

export const getShortModNameOfStream = (stream: TwitchStreamI|string): ShortModNames|null => {
  const streamTitle = typeof stream === "string" ? stream : stream.title;
  const results = supportedModInStreamTitleRegex.exec(streamTitle);

  if (results === null) {
    return null;
  }

  return getModShortNameBySupportedModInStreamTitle(results[1] as SupportedModInStreamTitle);
};