const Button = ({ children, handleClick, label, ...props }) => {
  return (
    <div
      aria-label={label}
      role="button"
      tabIndex="0"
      onClick={handleClick}
      onKeyPress={(e) => {
        if (e.code === "Enter") handleClick(e);
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button;
