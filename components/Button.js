import styles from "./Components.module.css";

export const Button = ({ isActive, children, onClick, activeColor = "#569166" }) => (
  <button
    className={styles.button}
    style={{
      backgroundColor: isActive && activeColor,
      color: isActive && "#fff",
    }}
    onClick={onClick}
  >
    {children}
  </button>
);
