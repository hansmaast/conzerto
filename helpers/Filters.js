import { differenceInDays, isToday } from "date-fns";

const today = new Date();

export const getShowsAhead = (shows = [], scene, days = 7) => {
  return shows.filter((show) => {
    const showDate = new Date(show.date);
   
    let condition = isInDayRange;  
  
    if (days === 0) {
      condition = isToday(showDate);
    }
    
    if (scene) {
      condition = condition && show.scene === scene;
    }
     
    if (scene && days === Infinity) {
        condition = show.scene === scene;
    }
    return condition;
  });
};
