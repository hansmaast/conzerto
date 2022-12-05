import { differenceInDays, isToday } from "date-fns";

const today = new Date();

export const getShowsAhead = (shows = [], scene, days = 7) => {
  return shows.filter((show) => {
    const showDate = new Date(show.date);
    const isInDayRange =
      differenceInDays(showDate, today) <= days || isToday(showDate);

    if (scene && scene !== "alle") {
      return show.scene === scene && isInDayRange;
    }
    return isInDayRange;
  });
};
