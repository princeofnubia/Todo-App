import "./Avatar.scss";
const Avatar = ({ children, handleClick, color }) => {
  return <div className={`rounded centered ${color}`}>{children}</div>;
};

export default Avatar;
