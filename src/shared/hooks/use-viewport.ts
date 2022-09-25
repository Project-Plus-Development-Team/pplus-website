import { useEffect, useState } from "react";

// pixel numbers are "up to and including"
const bulmaBreakpoints = {
  mobile: 768,
  tablet: 1023,
  desktop: 1215,
  widescreen: 1407,
};

export const useViewport = () => {
  const [width, setWidth] = useState(
    typeof window === "undefined" ? 800 : window.innerWidth
  );

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return {
    width,
    isMobile: width <= bulmaBreakpoints.mobile,
    isTablet:
      width > bulmaBreakpoints.mobile && width <= bulmaBreakpoints.tablet,
    isDesktop: width > bulmaBreakpoints.tablet,
    isWidescreen: width > bulmaBreakpoints.widescreen,
  };
};
