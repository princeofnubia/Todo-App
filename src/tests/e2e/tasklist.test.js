import React from "react";
import App from "../../App";
import tasks from "../fixtures";
import store from "../../store/store";
import { getTime, sleep } from "../../utils/";
import {
  addTask,
  stat,
  checkTask,
  clickOnTaskButton,
  render,
  screen,
  tabForward,
  tabBackward,
  avatar,
  createSomeTasks,
  checkBox,
  timeCompleted,
  pressEnter,
} from "../test_utils";
import userEvent from "@testing-library/user-event";
beforeEach(() => {
  store.dispatch({ type: "task/resetTask" });
});
describe("Creation of tasks", () => {
  it("should display zero for all stat description", () => {
    render(<App />, { store });
    expect(stat("total tasks opened")).toHaveTextContent("0");
    expect(stat("total tasks closed")).toHaveTextContent("0");
    expect(stat("completion rate")).toHaveTextContent("0%");
  });
  it("create two tasks and provies the proper tasks", () => {
    render(<App />, { store });
    clickOnTaskButton();
    addTask(tasks[0]);
    clickOnTaskButton();
    addTask(tasks[1]);
    expect(stat("total tasks opened")).toHaveTextContent("2");
    expect(stat("total tasks closed")).toHaveTextContent("0");
    expect(stat("completion rate")).toHaveTextContent("0%");
  });
  it("create three tasks and show proper list of tasks", () => {
    render(<App />, { store });
    const [task1, task2, task3] = tasks;
    createSomeTasks([task1, task2, task3]);
    // checking that the tasks are on the screen
    expect(screen.getByText(task1.taskDescription)).toHaveTextContent(
      "Write a todo app with the provided screens"
    );
    expect(screen.getByText(task2.taskDescription)).toHaveTextContent(
      "Visit my grand ma"
    );
    expect(screen.getByText(task3.taskDescription)).toHaveTextContent(
      "Go Shopping with my wife"
    );
    expect(stat("total tasks opened")).toHaveTextContent("3");
    expect(stat("total tasks closed")).toHaveTextContent("0");
    expect(stat("completion rate")).toHaveTextContent("0%");
  });
  it("create three tasks and check two to be done", async () => {
    render(<App />, { store });
    const [, task1, task2, task3] = tasks;
    createSomeTasks([task1, task2, task3]);
    // before checking task 3 and 2
    // testing tasks list
    expect(screen.getByText(task1.taskDescription)).toHaveTextContent(
      "Visit my grand ma"
    );
    expect(screen.getByText(task2.taskDescription)).toHaveTextContent(
      "Go Shopping with my wife"
    );
    expect(screen.getByText(task3.taskDescription)).toHaveTextContent(
      "Take the kid to visit the zoo"
    );
    expect(stat("total tasks opened")).toHaveTextContent("3");
    expect(stat("total tasks closed")).toHaveTextContent("0");
    expect(stat("completion rate")).toHaveTextContent("0%");
    expect(avatar(task1.taskName)).toHaveTextContent("V");
    expect(avatar(task2.taskName)).toHaveTextContent("G");
    expect(avatar(task3.taskName)).toHaveTextContent("V");

    let taskName3 = task3.taskName;
    checkTask(taskName3);
    let taskName2 = task2.taskName;
    checkTask(taskName2);
    await sleep(400);
    // after checking task 3 and 2
    expect(stat("total tasks opened")).toHaveTextContent("1");
    expect(stat("total tasks closed")).toHaveTextContent("2");
    expect(stat("completion rate")).toHaveTextContent("66%");
  }, 20000);

  it("create three tasks and check one to be done", async () => {
    render(<App />, { store });
    const [, task1, task2, task3] = tasks;
    createSomeTasks([task3, task2, task1]);
    // before checking task 3
    expect(stat("total tasks opened")).toHaveTextContent("3");
    expect(stat("total tasks closed")).toHaveTextContent("0");
    expect(stat("completion rate")).toHaveTextContent("0%");
    expect(avatar(task3.taskName)).toHaveTextContent("V");
    expect(avatar(task2.taskName)).toHaveTextContent("G");
    expect(avatar(task1.taskName)).toHaveTextContent("V");

    checkTask(task3.taskName);
    await sleep(200);
    // after checking through task 3
    expect(stat("total tasks opened")).toHaveTextContent("2");
    expect(stat("total tasks closed")).toHaveTextContent("1");
    expect(stat("completion rate")).toHaveTextContent("33%");
    expect(avatar(task3.taskName)).toHaveAccessibleName(task3.taskName);
  }, 20000);

  it("focusable element in the task list page should accept correct tab sequence forward or backward", () => {
    render(<App />, { store });
    const [task1, task2, task3, task4] = tasks;
    createSomeTasks([task1, task2, task3, task4]);
    // lets view some tasks stat
    expect(stat("total tasks opened")).toHaveTextContent("4");
    expect(stat("total tasks closed")).toHaveTextContent("0");
    expect(stat("completion rate")).toHaveTextContent("0%");
    expect(avatar(task1.taskName)).toHaveTextContent("D");
    expect(avatar(task2.taskName)).toHaveTextContent("V");
    expect(avatar(task3.taskName)).toHaveTextContent("G");
    expect(avatar(task4.taskName)).toHaveTextContent("V");
    // lets tab through it
    tabForward();
    expect(
      screen.getByRole("button", {
        name: /switch-button/i,
      })
    ).toHaveFocus();
    tabForward();
    expect(
      screen.getByRole("button", {
        name: /add-task/i,
      })
    ).toHaveFocus();
    tabForward();
    expect(checkBox(task1.taskName)).toHaveFocus();
    tabForward();
    expect(checkBox(task2.taskName)).toHaveFocus();
    tabForward();
    expect(checkBox(task3.taskName)).toHaveFocus();
    tabForward();
    expect(checkBox(task4.taskName)).toHaveFocus();
    tabBackward();
    expect(checkBox(task3.taskName)).toHaveFocus();
    tabBackward();
    expect(checkBox(task2.taskName)).toHaveFocus();
    tabBackward();
    expect(checkBox(task1.taskName)).toHaveFocus();
  });

  it("focusable element in should respond to enter key upon press", async () => {
    render(<App />, { store });
    const [task1, task2, task3, task4] = tasks;
    createSomeTasks([task1, task2, task3, task4]);
    // before checking
    expect(stat("total tasks opened")).toHaveTextContent("4");
    expect(stat("total tasks closed")).toHaveTextContent("0");
    expect(stat("completion rate")).toHaveTextContent("0%");
    expect(avatar(task1.taskName)).toHaveTextContent("D");
    expect(avatar(task2.taskName)).toHaveTextContent("V");
    expect(avatar(task3.taskName)).toHaveTextContent("G");
    expect(avatar(task4.taskName)).toHaveTextContent("V");
    // after checking
    tabForward();
    expect(
      screen.getByRole("button", {
        name: /switch-button/i,
      })
    ).toHaveFocus();
    tabForward();
    expect(
      screen.getByRole("button", {
        name: /add-task/i,
      })
    ).toHaveFocus();
    userEvent.tab();
    expect(checkBox(task1.taskName)).toHaveFocus();

    pressEnter();
    // handling some timeout and buffering it to avoid jest yelling at me!
    await sleep(300);
    let currentTime = getTime();
    expect(timeCompleted(currentTime)).toHaveTextContent(currentTime);
  }, 20000);
});
