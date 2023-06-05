import React, { ReactNode, KeyboardEvent, MouseEvent } from "react";

interface ButtonProps {
  children: ReactNode;
  handleClick: (event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => void;
  title?: string;
  className: string | any;
  label?: string;

}

const Button: React.FC<ButtonProps> = ({ children, handleClick, label, ...props }) => {
  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === "Enter") {
      handleClick(e);
    }
  };

  return (
    <div
      aria-label={label}
      role="button"
      tabIndex={0}
      onClick={(e: MouseEvent<HTMLDivElement>) => handleClick(e)}
      onKeyPress={handleKeyPress}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button;
