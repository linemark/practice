// TODO: find how to check innerHTML api for this situation
//       change the render way to aviod it

// NOTE: shouldn't test in different 'it', it will be cleared everytime.
//       rerender in beforeEach can resolve this problem

// TODO: is that html props 'data-testid' will be remove when packaging?

import React from "react";
import { render, RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from ".";

let wrapper: RenderResult;

describe("todo list", () => {
  const wrapperRender = () => render(<TodoList />);
  describe("when input an item and click add button", () => {
    beforeEach(() => {
      wrapper = wrapperRender();
      const todoInput = wrapper.getByPlaceholderText("todo item");
      userEvent.type(todoInput, "todo no.1");
      userEvent.click(wrapper.getByText("add"));
    });

    it("should add a todo item", async () => {
      expect(await wrapper.findAllByText("todo no.1")).toHaveLength(1);
    });

    it("should empty input value", () => {
      const todoInput = wrapper.getByPlaceholderText("todo item");
      expect((todoInput as HTMLInputElement).value).toBe("");
    });

    it("should total count is 1", async () => {
      expect(wrapper.getByTestId("total")).toHaveTextContent("total: 1");
    });

    describe("when click delete button", () => {
      beforeAll(() => {
        wrapper = wrapperRender();
        const todoInput = wrapper.getByPlaceholderText("todo item");
        userEvent.type(todoInput, "todo no.1");
        userEvent.click(wrapper.getByText("add"));
      });
      // TypeError: Cannot read property 'getByText' of undefined ?
      userEvent.click(wrapper.getByText("delete"));
      // it("should list have no item", async () => {
      //   expect(await wrapper.findByTestId("list-ul")).toBeEmpty();
      // });
    });
  });
});
