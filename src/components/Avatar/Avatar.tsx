import React, { ReactNode } from "react";
import "./Avatar.scss";

interface AvatarProps {
  children: ReactNode;
  handleClick?: () => void;
  color?: string;
}

const Avatar: React.FC<AvatarProps> = ({ children, handleClick, color }) => {
  return (
    <div className={`rounded centered ${color}`} onClick={handleClick}>
      {children}
    </div>
  );
};

export default Avatar;
