import { useMenuState } from "../../globalState/menuState";
import { useShowFilters } from "../../globalState/showFilters";
import { dateColor } from "../../helpers/Colors";
import { useShowNav } from "../../hooks/useShowNav";
import { Button } from "../Button";
import { CloseButton } from "../CloseButton/CloseButton";
import { dateOptions, DateSelection, SceneSelector } from "../Selectors";
import { StickyDateIndicator } from "../StickyDateIndicator/StickyDateIndicator";
import styles from "./stickyNavigation.module.css";

export const limit = 250;

export const StickyNavigation = ({ startDate = new Date(), endDate = new Date() }) => {
  const { scene, dateOption } = useShowFilters();
  const [showNav, navRef] = useShowNav();
  const menu = useMenuState();

  const handleDateClick = () => {
    menu.setMenu("date");
  };

  const handleSceneClick = () => {
    menu.setMenu("scene");
  };

  const closeMenu = () => {
    menu.setMenu(null);
  };

  return (
    <nav ref={navRef} data-visible={showNav} className={styles.navigation}>
      <section className={styles.nav}>
        <StickyDateIndicator start={startDate} end={endDate} />
        <div>
          <Button
            isActive={true}
            activeColor={dateColor}
            onClick={handleDateClick}
          >
            {dateOptions[dateOption]}
          </Button>
          <Button isActive onClick={handleSceneClick}>
            {scene}
          </Button>
        </div>
      </section>
      {menu.name && (
        <section className={styles.menu}>
          <CloseButton onClick={closeMenu} />
          {menu.name === "date" && <DateSelection />}
          {menu.name === "scene" && <SceneSelector />}
        </section>
      )}
    </nav>
  );
};
