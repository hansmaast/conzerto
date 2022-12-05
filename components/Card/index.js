import styles from "./card.module.css";

export const Card = (props) => (
  <a
    href={props.show.ticketLink}
    className={styles.card}
    data-date={props.show.date}
  >
    <h2 className={styles.cardTitle}>{props.show.title}</h2>
    <div>
      <p className={styles.cardScene}>{props.show.scene}</p>

      <p className={styles.cardDate}>
        {new Date(props.show.date).toLocaleDateString("no-NO", {
          day: "numeric",
          month: "long",
          year: "2-digit",
          weekday: "short",
        })}
      </p>
    </div>
  </a>
);
