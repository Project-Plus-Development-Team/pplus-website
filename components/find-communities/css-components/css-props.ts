import { MouseEventHandler } from "react";
import { CSSData } from "../../../types/find-communities-data";

export interface CSSProps {
  characterDiscordMap: Record<string, string>
  randomHandler: MouseEventHandler
  characterCommunityData: CSSData
}