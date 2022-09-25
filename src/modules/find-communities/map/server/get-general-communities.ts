import generalCommunityImages from "~capsules/communities";
import { isKeyOf } from "shared/functions/is-key-of";
import { UnavailableImageError } from "shared/errors";
import { GeneralCommunity, SheetGeneralCommunity } from "../map-types";
import { convertSheetToObjects } from "next-server-utilities/convert-sheet-to-objects";
import { getSpreadsheet } from "next-server-utilities/get-spreadsheet";

const getTypedImageName = (imageName: string): GeneralCommunity["imageName"] => {
  if (imageName === "pplusLogo" || isKeyOf(imageName, generalCommunityImages)) {
    return imageName;
  }

  throw new UnavailableImageError(imageName, "communities");
};

export const getGeneralCommunities = async () => {
  const [headerRow, ...rows] = await getSpreadsheet("general-communities");

  const rawObjects = convertSheetToObjects<SheetGeneralCommunity>(headerRow, rows)
    .filter(t => t.displayName.trim() !== "");

  return rawObjects.map<GeneralCommunity>(obj => (
    {
      ...obj,
      imageName: getTypedImageName(obj.imageName)
    }
  ));
};