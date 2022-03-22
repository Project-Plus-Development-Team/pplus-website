import { RawRegion, Region, Threshold } from "../types/find-communities-data";
import { getSpreadsheet } from "../lib/get-spreadsheet";

export interface FindCommunitiesData {
  characterDiscordMap: Record<string, string>
  regions: Region[]
}

const getCharacterDiscordMap = async (): Promise<FindCommunitiesData["characterDiscordMap"]> => {
  const discordSpreadsheetData = await getSpreadsheet("character-discords");

  const [headerRow, ...rows] = discordSpreadsheetData.values as unknown as any[][];
  const characterNameColumnIndex = headerRow.indexOf("characterName");
  const discordInviteIdColumnIndex = headerRow.indexOf("discordInviteId");

  return rows.reduce((prev, cur) => {
    const characterName = cur[characterNameColumnIndex];
    const discordInviteId = cur[discordInviteIdColumnIndex];

    return {
      ...prev,
      [characterName]: discordInviteId
    };
  }, {});
};

const convertSheetToObjects = <T extends {}>(
  headerRow: string[], rows: string[][]
): T[] => (
  rows.map(row => (
    headerRow.reduce<T>((prev, cur, index) => ({
      ...prev,
      [cur]: row[index] ?? ""
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    }), {} as T)
  ))
);

const mapShowThreshold = (thresholdText: Threshold) => {
  switch (thresholdText) {
    case "very-high": return 40;
    case "high": return 8;
    case "middle": return 5;
    case "low": return 3;
  }

  return 0;
};

const getYouTubeChannelUrl = (channelId: string, urlIsSlug: boolean) => {
  if (channelId.trim() === "") {
    return null;
  }

  if (urlIsSlug) {
    return `https://youtube.com/${channelId}`;
  }

  return `https://youtube.com/channel/${channelId}`;
};

const getRegions = async (): Promise<Region[]> => {
  const discordSpreadsheetData = await getSpreadsheet("region-markers");
  const [headerRow, ...rows] = discordSpreadsheetData.values as any[][];
  const rawObjects = convertSheetToObjects<RawRegion>(headerRow, rows);

  return rawObjects.map<Region>(raw => {
    const region: Region = {
      name: raw.name,
      coordinates: (raw.latitude && raw.longitude) ? {
        latitude: Number.parseFloat(raw.latitude),
        longitude: Number.parseFloat(raw.longitude)
      } : null,
      platforms: {
        discordInviteId: raw.discordInviteId,
        facebookGroupId: raw.facebookGroupId,
        twitchName: raw.twitchName,
        twitterHandle: raw.twitterHandle
      },
      showThreshold: mapShowThreshold(raw.showThreshold === "" ? "show-always" : raw.showThreshold)
    };

    const youtubeChannelUrl = getYouTubeChannelUrl(raw.youtubeChannelId, raw.youtubeUrlIsSlug === "TRUE");

    if (youtubeChannelUrl !== null) {
      region.platforms.youtubeChannelUrl = youtubeChannelUrl;
    }

    return region;
  });
};

export const getFindCommunitiesData = async (): Promise<FindCommunitiesData> => {
  const [characterDiscordMap, regions] = await Promise.all([
    getCharacterDiscordMap(),
    getRegions()
  ]);

  return {
    characterDiscordMap,
    regions
  };
};
