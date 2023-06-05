import React, { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import Button from "../../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

interface ChangeModeProps {
  className?: string;
}

const ChangeMode: React.FC<ChangeModeProps> = ({ className }) => {
  const themeContext = useContext(ThemeContext);

  const handleModeChange = () => {
    if (themeContext) {
      const newTheme = themeContext.theme === "light" ? "dark" : "light";
      themeContext.setTheme(newTheme);
    }
  };

  return (
    <Button
      label="switch-button"
      handleClick={handleModeChange}
      className={className}
      title={`Change to ${themeContext?.theme === "light" ? "dark" : "light"} mode`}
    >
      <FontAwesomeIcon
        icon={themeContext?.theme === "light" ? faMoon : faSun}
        className="mode-color"
      />
    </Button>
  );
};

export default ChangeMode;
