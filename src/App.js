import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import ThemeContext from "./context/ThemeContext";
import Navigator from "./Route/Route";
import Navbar from "./components/Layout/Navbar";

const App = () => {
  const theme = useState("light");
  return (
    <div className={`app ${theme[0]}`}>
      <ThemeContext.Provider value={theme}>
        <Router>
          <Navbar />
          <div className={`app-body`}>
            <Navigator />
          </div>
        </Router>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
