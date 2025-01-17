import { MouseEventHandler } from "react";

export interface CSSProps {
	characterDiscordMap: Record<string, string>;
	characterCommunityData: CSSData;
}

export interface CSSCharacter {
	name: string;
	img: string;
	discordInviteId?: string;
	isRandom?: boolean;
}

export interface CSSEntry {
	name: string;
	img: string;
	isRandom?: boolean;
}

export type CSSData = CSSEntry[][];
