export const Button = ({ isActive, children, onClick }) => (
  <button
    style={{
      backgroundColor: isActive && "#569166",
      color: isActive && "#fff",
    }}
    onClick={onClick}
  >
    {children}
  </button>
);
