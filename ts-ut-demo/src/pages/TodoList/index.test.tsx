import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from ".";

describe("todo list", () => {
  it("when input an item and click add button", async () => {
    const {
      findAllByText,
      findAllByTestId,
      getByPlaceholderText,
      getByText,
    } = render(<TodoList />);
    const todoInput = getByPlaceholderText("todo item");
    userEvent.type(todoInput, "todo no.1");
    userEvent.click(getByText("add"));

    // shouldn't test in different 'it', it will be cleared everytime.
    expect(await findAllByText("todo no.1")).toHaveLength(1);
    expect(await (todoInput as HTMLInputElement).value).toBe("");
    // find how to check innerHTML api for this situation
    expect(await findAllByTestId("total")).toHaveTextContent("1");
    // it("should add a todo item", async () => {
    //   expect(await findAllByText("todo no.1")).toHaveLength(1);
    // });

    // it("should empty input value", () => {
    //   expect((todoInput as HTMLInputElement).value).toBe("");
    // });

    // it("should total count is 1", async () => {
    //   expect(await findByTestId("total")).toHaveLength(1);
    // });
  });
});
