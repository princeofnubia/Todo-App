import React from "react";
import { toggleTheme, render } from "../test_utils";
import App from "../../App";
import store from "../../store/store";

it("toggles the the from on mode to the other", () => {
  render(<App />, { store });
  toggleTheme();
  const appBody = document.getElementsByClassName("app")[0];
  // in dark mode
  expect(appBody.classList.contains("dark")).toBe(true);
  toggleTheme();
  // in light mode
  expect(appBody.classList.contains("light")).toBe(true);
});
