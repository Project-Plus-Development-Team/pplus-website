import { Geographies, Geography } from "react-simple-maps";

import worldMapData from "../world-110m.topo.json";
import styles from "../Map.module.scss";

export const WorldMap = () => (
  <Geographies geography={worldMapData}>
    {({geographies}) => (
      geographies.map(geo => (
        <Geography
          key={geo.rsmKey}
          geography={geo}
          fill="#666"
          tabIndex={-1} // remove from tab order
          className={styles.geography}
        />
      ))
    )}
  </Geographies>
);