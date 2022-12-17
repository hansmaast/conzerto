import { useEffect, useState } from "react";
import { useShowFilters } from "../globalState/showFilters";
import { getShowsAhead } from "../helpers/Filters";

export const useShows = (shows) => {
  const { scene, dateOption } = useShowFilters();

  const [showsToRender, setShowsToRender] = useState([]);
  

  useEffect(() => {
    switch (dateOption) {
      case "today":
        const showsToday = getShowsAhead(shows, scene, 0);
        setShowsToRender(showsToday);
        return;
      case "thisWeek":
        const showsThisWeek = getShowsAhead(shows, scene, 7);
        setShowsToRender(showsThisWeek);
        return;
      case "thisMonth":
        const showsThisMonth = getShowsAhead(shows, scene, 30);
        setShowsToRender(showsThisMonth);
        return;
      default:
        const showsAll = getShowsAhead(shows, scene, Infinity);
        setShowsToRender(showsAll);
    }
  }, [dateOption, shows, scene]);

  return showsToRender;
};
