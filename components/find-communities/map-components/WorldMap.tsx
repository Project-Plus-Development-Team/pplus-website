import { Geographies, Geography } from "react-simple-maps";

import geo from "../../../data/world-110m.json";

export const WorldMap = () => (
  <Geographies geography={geo}>
    {({geographies}) => (
      geographies.map(geo => (
        <Geography
          key={geo.rsmKey}
          geography={geo}
          fill="#666"
        />
      ))
    )}
  </Geographies>
);