// TODO: find how to check innerHTML api for this situation
//       change the render way to aviod it

// NOTE: shouldn't test in different 'it', rendered compoment will be cleared everytime.
//       rerender in beforeEach can resolve this problem

// QUESTION: is that html props 'data-testid' will be remove when packaging?

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
      beforeEach(() => {
        userEvent.click(wrapper.getByText("delete"));
      });

      it("should list have no item", async () => {
        expect(await wrapper.findByTestId("list-ul")).toBeEmptyDOMElement();
      });

      it("should total count is 0", async () => {
        expect(wrapper.getByTestId("total")).toHaveTextContent("total: 0");
      });
    });

    describe("when batch add todo items", () => {
      beforeEach(() => {
        const todoInput = wrapper.getByPlaceholderText("todo item");
        userEvent.type(todoInput, "todo no.2");
        userEvent.click(wrapper.getByText("add"));
        userEvent.type(todoInput, "todo no.3");
        userEvent.click(wrapper.getByText("add"));
      });

      it("should batch add todo items", async () => {
        const itemUl = await wrapper.findByTestId("list-ul");
        expect(itemUl.childElementCount).toBe(3);
      });

      it("should total count is 3", () => {
        expect(wrapper.getByTestId("total")).toHaveTextContent("total: 3");
      });

      it("should empty todo list after click clear all", async () => {
        userEvent.click(wrapper.getByText("clear all"));
        expect(await wrapper.findByTestId("list-ul")).toBeEmptyDOMElement();
      });
    });
  });
});
