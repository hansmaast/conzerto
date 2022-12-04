import { Button } from "../components/Button";
import styles from "./Components.module.css";

export const SceneSelector = (props) => (
  <section className={styles.section}>
    <div className={styles.gridSelector}>
      <Button
        isActive={!props.selected}
        onClick={() => props.setSelected(undefined)}
      >
        ALLE
      </Button>
      {props.scenes.map((scene) => (
        <Button
          key={scene}
          isActive={scene === props.selected}
          onClick={() => props.setSelected(scene)}
        >
          {scene.toUpperCase()}
        </Button>
      ))}
    </div>
  </section>
);