import {
	Geographies,
	Geography,
	type GeographiesProps,
} from "react-simple-maps";
import styles from "../Map.module.scss";

export type WorldMapTopoJsonData = GeographiesProps["geography"];

type Props = {
	worldMapData: WorldMapTopoJsonData;
};

export const WorldMap = ({ worldMapData }: Props) => (
	<Geographies geography={worldMapData}>
		{({ geographies }) =>
			geographies.map((geo) => (
				<Geography
					key={geo.rsmKey}
					geography={geo}
					fill="#666"
					tabIndex={-1} // remove from tab order
					className={styles.geography}
				/>
			))
		}
	</Geographies>
);
