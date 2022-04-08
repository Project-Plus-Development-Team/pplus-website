import { getSpreadsheet } from "next-server-utilities/get-spreadsheet";

export const getCharacterDiscordMap = async (): Promise<Record<string, string>> => {
  const [headerRow, ...rows] = await getSpreadsheet("character-discords");
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
