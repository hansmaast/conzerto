import { useEffect, useState } from "react";

export const useDateInView = ({ scene = "", dateOption = "" }) => {
  const [dateInView, setDateInView] = useState(new Date());

  useEffect(() => {
    // list of elements to be observed
    const targets = document.getElementById("shows").children;

    const options = {
      root: null, // null means root is viewport
      rootMargin: "-100px",
      threshold: 0.5, // trigger callback when 50% of the element is visible
    };

    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        let dateOfEntry = new Date(entry.target.dataset.date);
        if (entry.isIntersecting && dateOfEntry !== dateInView) {
          console.log("dateInView", dateInView);

          setDateInView(dateOfEntry);
        }
      });

      return () => observer.disconnect();
    }, options);

    [...targets].forEach((target) => observer.observe(target));
  }, [scene, dateOption]);

  return { dateInView };
};
