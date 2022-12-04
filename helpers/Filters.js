import { isSameDay } from "./Dates";

const today = new Date();

export const getShowsAhead = (shows = [], days = 1) => {
  return shows.filter((show) => {
    const showDate = new Date(show.date);

    if (days === 1) {
      return isSameDay(showDate, today);
    }

    const isAhead = showDate.getDate() - today.getDate() <= days;
    const isSameMonth = showDate.getMonth() === today.getMonth();
    const isSameYear = showDate.getFullYear() === today.getFullYear();
    return isAhead && isSameMonth && isSameYear;
  });
};
