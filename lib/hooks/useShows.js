import { useEffect, useState } from "react";
import { getShowsAhead } from "../helpers/Filters";

export const useShows = (shows) => {
  const [scene, setScene] = useState("alle");
  const [dateOption, setDateOption] = useState("all");

  const [showsToRender, setShowsToRender] = useState(shows);

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

  return { showsToRender, scene, setScene, dateOption, setDateOption };
};
