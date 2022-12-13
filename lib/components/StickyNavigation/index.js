import { dateColor } from "../../helpers/Colors";
import { useShowNav } from "../../hooks/useShowNav";
import { Button } from "../Button";
import { dateOptions } from "../Selectors";
import { StickyDateIndicator } from "../StickyDateIndicator/StickyDateIndicator";
import styles from "./stickyNavigation.module.css";

export const limit = 250;

export const StickyNavigation = ({
  dateOption = "all",
  startDate = new Date(),
  endDate = new Date(),
  scene = "alle",
}) => {
  const [showNav, navRef] = useShowNav();

  const notImplemented = () => {
    alert("Sorry, this is under construction 🚧");
  };

  return (
    <nav ref={navRef} data-visible={showNav} className={styles.navigation}>
      <StickyDateIndicator start={startDate} end={endDate} />
      <section>
        <Button
          isActive={true}
          activeColor={dateColor}
          onClick={notImplemented}
        >
          {dateOptions[dateOption]}
        </Button>
        <Button isActive onClick={notImplemented}>
          {scene}
        </Button>
      </section>
    </nav>
  );
};
