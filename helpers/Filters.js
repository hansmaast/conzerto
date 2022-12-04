import { differenceInDays, isToday } from "date-fns";

const today = new Date();

export const getShowsAhead = (shows = [], scene, days = 7) => {
  return shows.filter((show) => {
    const showDate = new Date(show.date);
    
    const isInDayRange = differenceInDays(showDate, today) <= days || isToday(showDate);
   
    let condition = isInDayRange;  
    
    if (scene) {
      condition = isInDayRange && show.scene === scene;
    }
     
    if (scene && days === Infinity) {
        condition = show.scene === scene;
    }
    return condition;
  });
};
