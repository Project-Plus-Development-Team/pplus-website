// importing using "require" because otherwise TS complains about missing type defs and we really don't need them.
const { feature } = require("topojson-client");
const { topology } = require("topojson-server");

export const optimizeTopoJson = (jsonString: string) => {
	const topoJson = JSON.parse(jsonString);
	const key = Object.keys(topoJson.objects)[0];
	const geoJson = feature(topoJson, key);

	geoJson.features = geoJson.features.filter(
		(feat: any) => feat.properties.NAME !== "Antarctica" // who needs antarctica
	);

	for (const feat of geoJson.features) {
		delete feat.properties; // makes the resulting JSON significantly smaller (we don't need names etc.)
	}

	return topology([geoJson], 3000); // quantization
};
