import React from "react";
import App from "../../App";
import tasks from "../fixtures";
import store from "../../store/store";
import {
  addTask,
  stat,
  clickOnTaskButton,
  render,
  screen,
  tabForward,
} from "../test_utils";
import userEvent from "@testing-library/user-event";
beforeEach(() => {
  store.dispatch({ type: "task/resetTask" });
});
describe("Creation of tasks", () => {
  it("create tasks upon submit in user input and navigate to the task list", () => {
    render(<App />, { store });
    clickOnTaskButton();
    addTask(tasks[0]);
    expect(stat("total tasks opened")).toHaveTextContent("1");
    expect(stat("total tasks closed")).toHaveTextContent("0");
    expect(stat("completion rate")).toHaveTextContent("0%");
  });
  it("form should accept proper input", () => {
    render(<App />, { store });
    clickOnTaskButton();
    // input into the forms
    const taskNameInput = screen.getByPlaceholderText("Task Name");
    userEvent.type(taskNameInput, "Going To The Mall");
    expect(taskNameInput).toHaveValue("Going To The Mall");
    const taskDescription = screen.getByPlaceholderText("Task Description");
    userEvent.type(
      taskDescription,
      "I need to buy pepper and some other things"
    );
    expect(taskDescription).toHaveValue(
      "I need to buy pepper and some other things"
    );
  });

  it("focusable element in the task list page should accept correct tab sequence forward or backward", () => {
    render(<App />, { store });
    // after checking
    const taskNameInput = screen.getByPlaceholderText("Task Name");
    const taskDescription = screen.getByPlaceholderText("Task Description");
    tabForward();
    expect(taskNameInput).toHaveFocus();
    tabForward();
    expect(taskDescription).toHaveFocus();
    tabForward();
    const addButton = screen.getByRole("button", {
      name: /add/i,
    });
    expect(addButton).toHaveFocus();
  });
});
