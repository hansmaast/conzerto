import styles from "./button.module.css";

export const Button = ({
  isActive,
  children,
  onClick,
  activeColor = "#569166",
  ...props
}) => (
  <button
    className={styles.button}
    style={{
      backgroundColor: isActive ? activeColor : "transparent",
      color: isActive ? "#fff" : "inherit",
    }}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);
