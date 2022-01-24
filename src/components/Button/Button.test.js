/* eslint-disable testing-library/no-unnecessary-act */
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/dom";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Button from "./Button";

export default function Count(props) {
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <Button label="add-task" handleClick={handleClick}>
        Clicked Me {count} times
      </Button>
    </>
  );
}

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(
      <Button>
        <span>I am Abubakri</span>
      </Button>,
      container
    );
  });
  expect(container.textContent).toBe("I am Abubakri");

  act(() => {
    render(
      <Button>
        <div>Hello DoubleGDP</div>
      </Button>,
      container
    );
  });
  expect(container.textContent).toBe("Hello DoubleGDP");
});

it("handles click", () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(<Count onKey />, container);
  });
  expect(container.textContent).toBe("Clicked Me 0 times");
  const button = screen.getByText("Clicked Me 0 times");
  // clicking on it
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(container.textContent).toBe("Clicked Me 1 times");
});

it("handles enter key", () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(<Count />, container);
  });
  expect(container.textContent).toBe("Clicked Me 0 times");
  screen.getByText("Clicked Me 0 times").focus();
  // clicking on it
  userEvent.keyboard("[Enter]");
  expect(container.textContent).toBe("Clicked Me 1 times");
});
