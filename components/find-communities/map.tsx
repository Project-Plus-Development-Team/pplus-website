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
    router.push(router.pathname + hash);
  };

  useEffect(() => {
    if (router.isReady) {
      const regionName = router.asPath.match(/#(.*)/);
      console.log(regionName);

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

  // This disables SSR because SSR + responsive SVG map = some marker offset crap
  // Also can't be put at the top of the component because https://reactjs.org/docs/hooks-rules.html
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#040404",
        borderRadius: "0.5em",
        overflow: "hidden"
      }}
    >
      <MapModal
        region={modalContent}
        onClose={() => setModal(null)}
      />
      <ComposableMap
        height={isDesktop ? 300 : 600}
        projection="geoMercator"
        projectionConfig={{
          scale: 100
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