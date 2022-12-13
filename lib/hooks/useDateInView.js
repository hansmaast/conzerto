import { throttle } from "lodash";
import { useEffect, useState } from "react";
import { useLimit } from "./useLimit";

const options = {
  root: null, // null means root is viewport
  rootMargin: "100px",
  threshold: [0.5],
};

export const useDateInView = ({ scene = "", dateOption = "" }) => {
  const [newestDate, setNewestDate] = useState(new Date());
  const [oldestDate, setOldestDate] = useState(new Date());
  const limit = useLimit();

  useEffect(() => {
    // list of elements to be observed
    const targets = document.getElementById("shows").children;

    let observed = [new Date()];

    const rate = 100;
    const update = throttle(() => {
      setNewestDate(observed[0]);
      setOldestDate(observed[observed.length - 1]);
    }, rate);

    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const dateString = entry.target.getAttribute("data-date");
          const date = new Date(dateString);
          observed.push(date);
          observed = observed.sort((a, b) => a - b);
          if (observed.length > limit) {
            observed.shift();
          }
          update();
        }
      });
    }, options);

    for (const target of targets) {
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, [scene, dateOption, limit]);

  return { newestDate, oldestDate };
};
