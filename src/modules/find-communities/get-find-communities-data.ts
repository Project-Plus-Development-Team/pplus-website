import { getSpreadsheet } from "../../node-utilities/get-spreadsheet";
import { RawRegion, Region } from "./map/map-types";

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
  headerRow: (keyof T)[],
  rows: string[][],
  filter: (partial: T) => boolean
): T[] => (
  rows
    .map(row => (
      headerRow.reduce((prev, cur, index) => {
        return {
          ...prev,
          [cur]: row[index] ?? ""
        };
      }, {}) as T
    ))
    .filter(filter)
);

const mapShowThreshold = (thresholdText: string) => {
  switch (thresholdText) {
    case "very-high": return 40;
    case "high": return 8;
    case "middle": return 5;
    case "low": return 3;
    case "show-always": return 0;
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
  const rawObjects = convertSheetToObjects<RawRegion>(
    headerRow,
    rows,
    partial => partial.name.trim() !== ""
  );

  return rawObjects.map<Region>(raw => {
    const region: Region = {
      name: raw.name,
      subtitle: raw.subtitle,
      coordinates: {
        latitude: Number.parseFloat(raw.latitude),
        longitude: Number.parseFloat(raw.longitude)
      },
      platforms: {
        discordInviteId: raw.discordInviteId,
        facebookGroupId: raw.facebookGroupId,
        twitchName: raw.twitchName,
        twitterHandle: raw.twitterHandle
      },
      showThreshold: mapShowThreshold(raw.showThreshold)
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
