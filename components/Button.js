import styles from "./Components.module.css";

export const Button = ({ isActive, children, onClick }) => (
  <button
    className={styles.button}
    style={{
      backgroundColor: isActive && "#569166",
      color: isActive && "#fff",
    }}
    onClick={onClick}
  >
    {children}
  </button>
);
