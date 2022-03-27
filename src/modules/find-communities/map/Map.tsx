import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  ComposableMap,
  ZoomableGroup
} from "react-simple-maps";
import { useViewport } from "shared/hooks/use-viewport";
import { MapModal } from "./components/MapModal";
import { RegionComponent } from "./components/RegionComponent";
import { WorldMap } from "./components/WorldMap";
import { Region } from "./map-types";

import styles from "./Map.module.scss";

export interface MapProps {
  regions: Region[]
}

const useModal = (regions: Region[]) => {
  const [modalContent, setModalContent] = useState<Region|null>(null);
  const router = useRouter();

  const setModal = (region: Region|null) => {
    setModalContent(region);
    const hash = region?.name ? `#${region.name}` : "";
    router.push(router.pathname + hash, undefined, {
      scroll: false
    });
  };

  useEffect(() => {
    if (router.isReady) {
      const regionName = router.asPath.match(/#(.*)/);

      if (regionName !== null) {
        const decoded = decodeURI(regionName[1]);
        const foundRegion = regions.find(r => r.name === decoded);

        if (foundRegion !== undefined) {
          setModal(foundRegion);
        }
      }
    }
  }, []);

  return { modalContent, setModal };
};

export const Map = ({ regions }: MapProps) => {
  const initialZoom = 1;
  const [zoom, setZoom] = useState(initialZoom);
  const dynamicScalingFactor = 5 / (zoom + 4);
  const { modalContent, setModal } = useModal(regions);
  const { isDesktop, isTablet } = useViewport();

  return (
    <div className={`${styles.wrapper} ${isDesktop ? "" : ""}`} /* TODO */>
      <MapModal
        region={modalContent}
        onClose={() => setModal(null)}
      />
      <ComposableMap
        height={isDesktop ? 300 : (isTablet ? 600 : 1000) }
        projection="geoMercator"
        projectionConfig={{
          scale: 100
        }}
        className={styles.map}
      >
        <ZoomableGroup
          onMove={event => setZoom(event.k)}
          zoom={initialZoom}
          maxZoom={80}
          minZoom={0.8}
        >
          <WorldMap/>
          {regions
            .filter(region => region.coordinates !== null)
            .sort((a, b) => { // render low threshold markers last
              if (b.showThreshold < a.showThreshold) {
                return -1;
              }
              return 0;
            })
            .map(region => (
              <RegionComponent
                key={region.name}
                region={region}
                zoom={zoom}
                dynamicScalingFactor={dynamicScalingFactor}
                onClick={() => setModal(region)}
                isDesktop={isDesktop}
              />
            ))
          }
        </ZoomableGroup>
      </ComposableMap>
      <div className={styles.scroll_area}>
        <span style={{ fontSize: "1.5em" }}>«</span>
        <span>Scroll here</span>
        <span style={{ fontSize: "1.5em" }}>»</span>
      </div>
    </div>
  );
};