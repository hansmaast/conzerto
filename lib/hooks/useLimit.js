import { useEffect, useState } from "react";
import { useClientWidth } from "./useClientWidth";

export const useLimit = () => {
  const [limit, setLimit] = useState(0);

  const clientWidth = useClientWidth();

  useEffect(() => {
    if (clientWidth.isMobile) {
      setLimit(3);
    } else if (clientWidth.isTablet) {
      setLimit(9);
    } else {
      setLimit(12);
    }
  }, [clientWidth]);

  return limit;
};
