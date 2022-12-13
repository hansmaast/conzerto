import { useEffect, useState } from "react";

export const useClientWidth = () => {
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = document.documentElement.clientWidth;
      setClientWidth(width);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    clientWidth,
    isMobile: clientWidth < 768,
    isTablet: clientWidth >= 768 && clientWidth < 1024,
    isDesktop: clientWidth >= 1024,
  };
};
