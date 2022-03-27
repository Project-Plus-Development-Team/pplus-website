import { Geographies, Geography } from "react-simple-maps";

import geography from "../world-110m.json";

export const WorldMap = () => (
  <Geographies geography={geography}>
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