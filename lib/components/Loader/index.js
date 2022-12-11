import { useEffect, useState } from "react";
import { quotes } from "../../helpers/RandomStrings";
import styles from "./loader.module.css";

export const Loader = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [animationState, setAnimationState] = useState("in");

  const quote = quotes[quoteIndex];

  useEffect(() => {
    const interval = setInterval(async () => {
      setAnimationState("out");
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setQuoteIndex((prev) => {
        if (prev === quotes.length - 1) {
          return 0;
        }
        return prev + 1;
      });
      setAnimationState("in");
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.loader}>
      <div role="presentation"></div>
      <p data-state={animationState}>{quote}</p>
    </div>
  );
};
