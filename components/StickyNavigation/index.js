import { dateColor } from "../../helpers/Colors";
import { Button } from "../Button";
import styles from "./stickyNavigation.module.css";

export const StickyNavigation = (
  props = {
    dateOption: "all",
    dateInView: new Date(),
    scene: "alle",
  }
) => {
  return (
    <nav className={styles.navigation}>
      <Button isActive={true} activeColor={dateColor}>
        {props.dateInView
          .toLocaleDateString("no-NO", {
            day: "numeric",
            month: "short",
          })
          .toUpperCase()}
      </Button>
      <Button isActive>{props.scene.toUpperCase()}</Button>
    </nav>
  );
};
