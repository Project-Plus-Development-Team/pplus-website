export type Threshold = "show-always" | "low" | "middle" | "high" | "very-high";

export interface SheetRegion {
	name: string;
	subtitle: string;
	showThreshold: Threshold;
	latitude: string;
	longitude: string;
	discordInviteId: string;
	facebookGroupId: string;
	twitterHandle: string;
	youtubeUrlIsSlug: "TRUE" | "FALSE";
	youtubeChannelId: string;
	twitchName: string;
	website: string;
}

export interface Coordinates {
	latitude: number;
	longitude: number;
}

export interface Platforms {
	discordInviteId: string;
	facebookGroupId: string;
	twitterHandle: string;
	youtubeChannelUrl: string;
	twitchName: string;
	website: string;
}

export interface Region {
	name: string;
	subtitle: string;
	showThreshold: number;
	coordinates: Coordinates;
	platforms: Partial<Platforms>;
}

export interface SheetGeneralCommunity {
	displayName: string;
	url: string;
	imageName: string;
}

import type images from "~image-indexes/communities";

export interface GeneralCommunity extends SheetGeneralCommunity {
	imageName: keyof typeof images | "pplusLogo";
}
