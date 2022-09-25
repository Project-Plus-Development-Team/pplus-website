import { useMemo } from "react";
import { getShortModNameOfStream } from "../functions/get-mod-of-stream";
import { supportedMods } from "../mod-data";
import { TwitchStreamI } from "../twitch-api";

export const useMod = (stream: TwitchStreamI|string) => (
  useMemo(() => {
    const shortName = getShortModNameOfStream(stream);
    return shortName && supportedMods[shortName];
  }, [stream])
);