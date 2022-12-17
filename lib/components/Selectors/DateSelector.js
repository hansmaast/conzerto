import { useShowFilters } from "../../globalState/showFilters";
import { Button } from "../Button";
import styles from "./selectors.module.css";

export const dateOptions = {
  today: "i dag",
  thisWeek: "denne uka",
  thisMonth: "denne måneden",
  all: "vis alle",
  // custom: "tilpasset",
};

export const activeColor = "#e88138";

export const DateSelection = () => {
  const { setDateOption, dateOption } = useShowFilters();

  return (
    <section className={styles.section}>
      <div className={styles.gridSelector}>
        {Object.entries(dateOptions).map(([key, value]) => {
          return (
            <Button
              key={key}
              onClick={() => setDateOption(key)}
              isActive={dateOption === key}
              activeColor={activeColor}
            >
              {value.toUpperCase()}
            </Button>
          );
        })}
      </div>
      {/* <Button
      onClick={() => setDateOption("custom")}
      isActive={dateOption === "custom"}
      activeColor="#e88138"
    >
      {dateOptions.custom}
    </Button> */}
    </section>
  );
};
