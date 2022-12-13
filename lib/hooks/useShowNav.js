import { throttle } from "lodash";
import { useEffect, useRef, useState } from "react";
import { limit } from "../components/StickyNavigation/index";

export const useShowNav = () => {
  const [showNav, setShowNav] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const nav = navRef.current;
      const { top } = nav.getBoundingClientRect();

      if (top <= limit) {
        console.log("showNav", true);
        setShowNav(true);
      } else if (top > limit) {
        console.log("showNav", false);
        setShowNav(false);
      }
    }, 300);

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navRef]);

  return [showNav, navRef];
};
