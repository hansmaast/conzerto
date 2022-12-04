import styles from "./Components.module.css";

export const Shows = (props) => (
  <section className={styles.shows}>
    {props.showsToRender.map((show, i) => (
      <a
        key={show.title + "_" + i}
        href={show.ticketLink}
        className={styles.card}
      >
        <h2 className={styles.cardTitle}>{show.title.toUpperCase()}</h2>
        <div className={styles.cardDate}>
          <p>{new Date(show.date).toLocaleDateString("no-NO", {})}</p>
        </div>
      </a>
    ))}
  </section>
);
