import { differenceInDays, isToday } from "date-fns";

export const getShowsAhead = (shows = [], scene, days = 7) => {
  return shows.filter((show) => {
    const showDate = new Date(show.date);

    let condition = true;

    if (days === 0) {
      condition = isToday(showDate);
    }

    if (days > 0 && days < Infinity) {
      condition = differenceInDays(showDate, new Date()) <= days;
    }

    if (scene && scene !== "alle") {
      condition = condition && show.scene === scene;
    }

    return condition;
  });
};
