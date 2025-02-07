import { convertSheetToObjects, getSpreadsheet } from "app/google-sheets";
import type { SheetRegion, Region } from "./map/map-types";

const mapShowThreshold = (thresholdText: string) => {
	switch (thresholdText) {
		case "very-high":
			return 40;
		case "high":
			return 8;
		case "middle":
			return 5;
		case "low":
			return 3;
		case "show-always":
			return 0;
	}

	return 0;
};

const getYouTubeChannelUrl = (channelId: string, urlIsSlug: boolean) => {
	if (channelId.trim() === "") {
		return null;
	}

	if (urlIsSlug) {
		return `https://www.youtube.com/${channelId}`;
	}

	return `https://www.youtube.com/channel/${channelId}`;
};

export const getRegions = async (): Promise<Region[]> => {
	const [headerRow, ...rows] = await getSpreadsheet("region-markers");
	const rawObjects = convertSheetToObjects<SheetRegion>(headerRow, rows).filter(
		(t) => t.name.trim() !== ""
	);

	return rawObjects.map<Region>((raw) => {
		const region: Region = {
			name: raw.name,
			subtitle: raw.subtitle,
			coordinates: {
				latitude: Number.parseFloat(raw.latitude),
				longitude: Number.parseFloat(raw.longitude),
			},
			platforms: {
				discordInviteId: raw.discordInviteId,
				facebookGroupId: raw.facebookGroupId,
				twitchName: raw.twitchName,
				twitterHandle: raw.twitterHandle,
				website: raw.website,
			},
			showThreshold: mapShowThreshold(raw.showThreshold),
		};

		const youtubeChannelUrl = getYouTubeChannelUrl(
			raw.youtubeChannelId,
			raw.youtubeUrlIsSlug === "TRUE"
		);

		if (youtubeChannelUrl !== null) {
			region.platforms.youtubeChannelUrl = youtubeChannelUrl;
		}

		return region;
	});
};
