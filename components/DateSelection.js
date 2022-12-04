import { Button } from "./Button";
import styles from "./Components.module.css";

const dateSelection = {
  today: "I DAG",
  thisWeek: "DENNE UKA",
  thisMonth: "DENNE MÅNEDEN",
  all: "VIS ALLE",
  // custom: "TILPASS",
};

const activeColor = "#e88138";

export const DateSelection = (props) => (
  <section className={styles.section}>
    <div className={styles.gridSelector}>
      {Object.entries(dateSelection).map(([key, value]) => {
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
