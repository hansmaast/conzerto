import { useEffect, useState } from "react";
import { getShowsAhead } from "../helpers/Filters";

export const useShows = (shows) => {
  const [scene, setScene] = useState("alle");
  const [dateOption, setDateOption] = useState("all");

  const [showsToRender, setShowsToRender] = useState(shows);

  useEffect(() => {
    switch (dateOption) {
      case "today":
        setShowsToRender(getShowsAhead(shows, scene, 1));
        return;
      case "thisWeek":
        setShowsToRender(getShowsAhead(shows, scene, 7));
        return;
      case "thisMonth":
        setShowsToRender(getShowsAhead(shows, scene, 30));
        return;
      default:
        setShowsToRender(shows);
    }
  }, [dateOption, shows, scene]);

  return { showsToRender, scene, setScene, dateOption, setDateOption };
};
