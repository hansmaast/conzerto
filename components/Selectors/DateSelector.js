import { Button } from "../Button";
import styles from "./selectors.module.css";

export const dateOptions = {
  today: "I DAG",
  thisWeek: "DENNE UKA",
  thisMonth: "DENNE MÅNEDEN",
  all: "VIS ALLE",
  // custom: "TILPASS",
};

export const activeColor = "#e88138";

export const DateSelection = (props) => (
  <section className={styles.section}>
    <div className={styles.gridSelector}>
      {Object.entries(dateOptions).map(([key, value]) => {
        return (
          <Button
            key={key}
            onClick={() => props.setDateOption(key)}
            isActive={props.dateOption === key}
            activeColor={activeColor}
          >
            {value}
          </Button>
        );
      })}
    </div>
    {/* <Button
      onClick={() => props.setDateOption("custom")}
      isActive={props.dateOption === "custom"}
      activeColor="#e88138"
    >
      {dateSelection.custom}
    </Button> */}
  </section>
);
