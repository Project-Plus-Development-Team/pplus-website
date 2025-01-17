import { convertSheetToObjects, getSpreadsheet } from "app/google-sheets";
import generalCommunityImages from "~image-indexes/communities";
import type { GeneralCommunity, SheetGeneralCommunity } from "../map-types";

const getTypedImageName = (
	imageName: string
): GeneralCommunity["imageName"] => {
	if (imageName === "pplusLogo" || imageName in generalCommunityImages) {
		return imageName as keyof typeof generalCommunityImages;
	}

	throw new Error(
		`Image name "${imageName}" is not in the available images of the group "communities".\n` +
			`Maybe you forgot to run 'npm run generate-imgs'.`
	);
};

export const getGeneralCommunities = async () => {
	const [headerRow, ...rows] = await getSpreadsheet("general-communities");

	const rawObjects = convertSheetToObjects<SheetGeneralCommunity>(
		headerRow,
		rows
	).filter((t) => t.displayName.trim() !== "");

	return rawObjects.map<GeneralCommunity>((obj) => ({
		...obj,
		imageName: getTypedImageName(obj.imageName),
	}));
};
