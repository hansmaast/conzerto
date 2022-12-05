import { Button } from "../Button";
import styles from "./selectors.module.css";

const allScenes = "alle";

export const SceneSelector = (props) => (
  <section className={styles.section}>
    <div className={styles.gridSelector}>
      <Button
        isActive={props.selected === allScenes}
        onClick={() => props.setSelected(allScenes)}
      >
        {allScenes.toUpperCase()}
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
