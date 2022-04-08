import { useState } from "react";
import { Modal } from "react-bulma-components";
import { ComposableMap, ZoomableGroup } from "react-simple-maps";
import { useViewport } from "shared/hooks/use-viewport";
import { ModalContent } from "./components/ModalContent";
import { RegionComponent } from "./components/RegionComponent";
import { WorldMap } from "./components/WorldMap";
import { Region } from "./map-types";
import { useModal } from "./use-modal";

import styles from "./Map.module.scss";

export interface MapProps {
  regions: Region[]
}

export const Map = ({ regions }: MapProps) => {
  const initialZoom = 1;
  const [zoom, setZoom] = useState(initialZoom);
  const dynamicScalingFactor = 5 / (zoom + 4);
  const { modalContent, setModal } = useModal(regions);
  const { isDesktop, isTablet } = useViewport();

  return (
    <div className={`${styles.wrapper} ${isDesktop ? "" : ""}`} /* TODO */>
      <Modal
        show={modalContent !== null}
        onClose={() => setModal(null)}
        closeOnBlur={true}
      >
        {modalContent !== null && (
          <ModalContent region={modalContent}/>
        )}
      </Modal>
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
        <span>Scroll here for touch devices</span>
        <span style={{ fontSize: "1.5em" }}>»</span>
      </div>
    </div>
  );
};