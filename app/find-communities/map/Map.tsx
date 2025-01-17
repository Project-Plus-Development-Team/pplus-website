"use client";

import { MapWrapper } from "app/components/MapWrapper";
import { useEffect, useState } from "react";
import { ComposableMap, ZoomableGroup } from "react-simple-maps";
import { ModalContent } from "./components/ModalContent";
import { RegionComponent } from "./components/RegionComponent";
import { WorldMap, type WorldMapTopoJsonData } from "./components/WorldMap";
import type { Region } from "./map-types";
import styles from "./Map.module.scss";
import { MapModal } from "./Modal";

export interface PPlusMapProps {
	regions: Region[];
	worldMapData: WorldMapTopoJsonData;
}

export const Map = ({ regions, worldMapData }: PPlusMapProps) => {
	const initialZoom = 1;
	const [zoom, setZoom] = useState(initialZoom);
	const dynamicScalingFactor = 5 / (zoom + 4);
	const [region, setRegion] = useState<Region | null>(null);

	const [windowWidth, setWindowWidth] = useState(
		typeof window === "undefined" ? 800 : window.innerWidth
	);

	useEffect(() => {
		const handleWindowResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	return (
		<MapWrapper>
			<MapModal show={region !== null} onClose={() => setRegion(null)}>
				{region !== null && (
					<ModalContent
						region={region}
						onClose={() => setRegion(null)}
					/>
				)}
			</MapModal>
			<ComposableMap
				height={
					windowWidth > 1023
						? 300
						: windowWidth > 768 && windowWidth <= 1023
						? 600
						: 1000
				}
				projection="geoMercator"
				projectionConfig={{
					scale: 100,
				}}
				className={styles.map}
			>
				<ZoomableGroup
					onMove={(event) => setZoom((event as any).zoom)} // [upstream] https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/62407
					zoom={initialZoom}
					maxZoom={80}
					minZoom={0.8}
				>
					<WorldMap worldMapData={worldMapData} />
					{regions
						.filter((region) => region.coordinates !== null)
						.sort((a, b) => {
							// render low threshold markers last
							if (b.showThreshold < a.showThreshold) {
								return -1;
							}
							return 0;
						})
						.map((region) => (
							<RegionComponent
								key={region.name}
								region={region}
								zoom={zoom}
								dynamicScalingFactor={dynamicScalingFactor}
								onClick={() => setRegion(region)}
								isDesktop={windowWidth > 1023}
							/>
						))}
				</ZoomableGroup>
			</ComposableMap>
		</MapWrapper>
	);
};
