import { useShowFilters } from "../../globalState/showFilters";
import { Button } from "../Button";
import styles from "./selectors.module.css";

const allScenes = "alle";

export const SceneSelector = () => {
  const { setScene, scene, sceneOptions } = useShowFilters();

  return (
    <section className={styles.section}>
      <div className={styles.gridSelector}>
        <Button
          isActive={scene === allScenes}
          onClick={() => setScene(allScenes)}
        >
          {allScenes.toUpperCase()}
        </Button>
        {sceneOptions.map((name) => (
          <Button
            key={name}
            isActive={name === scene}
            onClick={() => setScene(name)}
          >
            {name.toUpperCase()}
          </Button>
        ))}
      </div>
    </section>
  );
};
