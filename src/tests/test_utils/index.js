import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

function render(ui, { store, ...renderOptions }) {
  // custom rendering of the UI with some providers
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

const getItem = (role, label) => {
  // get a node on the screen meeting a criteria
  return screen.getByRole(role, {
    name: new RegExp(label, "i"),
  });
};

export const inputTask = ({ taskName, taskDescription }) => {
  // input on a selected input
  userEvent.type(screen.getByPlaceholderText("Task Name"), taskName);
  userEvent.type(
    screen.getByPlaceholderText("Task Description"),
    taskDescription
  );
};

export const addTask = (task) => {
  // adding task into the forms and submitting
  inputTask(task);
  const addTaskButton = screen.getByRole("button", {
    name: /add/i,
  });
  userEvent.click(addTaskButton);
};

export const clickOnTaskButton = () => {
  // click on the task button to go the taskcreation route
  const addTaskButton = screen.getByRole("button", {
    name: /add-task/i,
  });
  userEvent.click(addTaskButton);
};

export const tabForward = () => {
  userEvent.tab();
};

export const tabBackward = () => {
  userEvent.tab({ shift: true });
};

export const stat = (statName) => {
  // get stat nodes
  return screen.getByRole("heading", {
    name: new RegExp(statName, "i"),
  });
};

export const toggleTheme = () => {
  const toggleTheme = screen.getByRole("button", {
    name: /switch-button/i,
  });
  userEvent.click(toggleTheme);
};

export const checkTask = (taskLabel) => {
  // checking the text box in the task list
  const checkBox = screen.getByRole("checkbox", {
    name: new RegExp(taskLabel, "i"),
  });
  userEvent.click(checkBox);
};

export const avatar = (avatarLabel) => {
  return getItem("figure", avatarLabel);
};

export const checkBox = (label) => {
  // get a check box of a particular task
  return screen.getByRole("checkbox", {
    name: new RegExp(label, "i"),
  });
};

export const timeCompleted = (time) => {
  // get the time on the screen for a task label
  return screen.getByRole("heading", {
    name: new RegExp(time, "i"),
  });
};

export const createSomeTasks = (tasks) => {
  // create tasks at will!
  tasks.forEach((task) => {
    clickOnTaskButton();
    addTask(task);
  });
};

export const pressEnter = () => {
  userEvent.keyboard("[Enter]");
};

export * from "@testing-library/react";
// override render method
export { render };
