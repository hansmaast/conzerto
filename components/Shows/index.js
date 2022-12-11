import { Card } from "../Card";
import styles from "./shows.module.css";

export const Shows = (props) => (
  <section id="shows" className={[styles.shows]}>
    {props.showsToRender.map((show, i) => (
      <Card key={show.title + "_" + i} show={show} />
    ))}
  </section>
);
