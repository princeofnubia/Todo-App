import { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import Button from "../../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
const ChangeMode = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const DarkMode = () => {
    return (
      <Button
        label="switch-button"
        handleClick={() => setTheme("light")}
        title="Change to light mode"
      >
        <FontAwesomeIcon icon={faMoon} className="mode-color" />
      </Button>
    );
  };

  const LightMode = () => {
    return (
      <Button
        label="switch-button"
        handleClick={() => setTheme("dark")}
        title="Change to dark mode"
      >
        <FontAwesomeIcon icon={faSun} className="mode-color" />
      </Button>
    );
  };

  return <>{theme === "light" ? <LightMode /> : <DarkMode />}</>;
};

export default ChangeMode;
