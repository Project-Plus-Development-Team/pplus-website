import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  ComposableMap,
  ZoomableGroup
} from "react-simple-maps";
import { useViewportWidth } from "../../lib/use-viewport-width";

import { Region } from "../../types/find-communities-data";
import { MapModal } from "./map-components/MapModal";
import { RegionComponent } from "./map-components/RegionComponent";
import { WorldMap } from "./map-components/WorldMap";

interface Props {
  regions: Region[]
}

export const Map = ({ regions }: Props) => {
  const initialZoom = 1;
  const [zoom, setZoom] = useState(initialZoom);
  const dynamicScalingFactor = 5 / (zoom + 4);

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
      console.log("regionName:", regionName);

      if (regionName !== null) {
        const decoded = decodeURI(regionName[1]);
        console.log("dec", decoded);
        const foundRegion = regions.find(r => r.name === decoded);
        console.log("found", foundRegion);

        if (foundRegion !== undefined) {
          setModal(foundRegion);
        }
      }
    }
  }, []);

  const viewportWidth = useViewportWidth();
  const isDesktop = viewportWidth > 1000;

  return (
    <div className={isDesktop ? "" : "pr-4"}>
      <MapModal
        region={modalContent}
        onClose={() => setModal(null)}
      />
      <ComposableMap
        height={isDesktop ? 300 : 800}
        projection="geoMercator"
        projectionConfig={{
          scale: 100
        }}
        style={{
          position: "relative",
          backgroundColor: "#040404",
          borderRadius: "0.5em",
          overflow: "hidden",
          border: ".3em solid #29717c"
        }}
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
    </div>
  );
};