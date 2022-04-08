import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Region } from "./map-types";

export const useModal = (regions: Region[]) => {
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