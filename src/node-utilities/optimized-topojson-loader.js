const { feature } = require("topojson-client");
const { topology } = require("topojson-server");

module.exports = jsonString => {
  const topoJson = JSON.parse(jsonString);

  const key = Object.keys(topoJson.objects)[0];
  const geoJson = feature(topoJson, key);

  geoJson.features = geoJson.features.filter(feat => (
    feat.properties.NAME !== "Antarctica"
  ));

  for (const feat of geoJson.features) {
    delete feat.properties;
  }

  return JSON.stringify(topology([geoJson], 3000));
};