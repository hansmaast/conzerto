import { useState } from "react";
import { Button } from "./Button";
import * as styles from "./Components.module.css";

export const DateRange = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [percentRange, setPercentRange] = useState(0);

  return (
    <div className={styles.dateRange}>
      <month>
        {[
          "Januar",
          "Februar",
          "Mars",
          "April",
          "Mai",
          "Juni",
          "Juli",
          "August",
          "September",
          "Oktober",
          "November",
          "Desember",
        ].map((month, i) => {
          return <Button key={month}>{month}</Button>;
        })}
      </month>
      {/* <input className={styles.button} style={{ left: `${percentRange}%` }} /> */}
    </div>
  );
};
