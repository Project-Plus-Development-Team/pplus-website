import { useEffect, useState } from "react";

export const useViewportWidth = () => {
  const [width, setWidth] = useState(typeof window === "undefined" ? 800 : window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width;
};