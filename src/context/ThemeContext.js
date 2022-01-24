import { createContext } from "react";
const ThemeContext = createContext(["light", (val) => val]);

export default ThemeContext;
