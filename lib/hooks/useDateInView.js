import { useCallback, useEffect, useState } from "react";

const options = {
  root: null, // null means root is viewport
  rootMargin: "0px",
  threshold: 1,
};

export const useDateInView = ({ scene = "", dateOption = "" }) => {
  const [dateInView, setDateInView] = useState(new Date());

  // need to figure out if this is necessary or not
  const setDate = useCallback((date) => {
    setDateInView(date);
  }, []);

  useEffect(() => {
    // list of elements to be observed
    const targets = document.getElementById("shows").children;

    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        let dateOfEntry = new Date(entry.target.getAttribute("data-date"));
        if (entry.isIntersecting) {
          setDate(dateOfEntry);
        }
      });
    }, options);

    [...targets].forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [scene, dateOption, setDate]);

  return { dateInView };
};
