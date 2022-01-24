/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Avatar from "./Avatar";

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
  act(() => {
    render(<Avatar />, container);
  });
  expect(container.textContent).toBe("");

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(
      <Avatar>
        <span>I am Abubakri</span>
      </Avatar>,
      container
    );
  });
  expect(container.textContent).toBe("I am Abubakri");

  act(() => {
    render(
      <Avatar>
        <div>Hello DoubleGDP</div>
      </Avatar>,
      container
    );
  });
  expect(container.textContent).toBe("Hello DoubleGDP");
});
