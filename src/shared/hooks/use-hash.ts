import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useHash = () => {
  const [anchor, setAnchor] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const decodedHash = decodeURI(window.location.hash);
      const target = decodedHash.slice(1).trim();
      setAnchor(target);
    }
  }, [router.isReady]);

  return anchor;
};
