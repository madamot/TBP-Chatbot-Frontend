import React from "react"
import { render, fireEvent } from "@testing-library/react";
import UserInput from '../components/UserInput/UserInput.js';

it("User input renders correctly", () => {
  const { queryByTestId, queryByPlaceholderText} = render(<UserInput/>)

  expect(queryByTestId("submit-button")).toBeTruthy()
  expect(queryByPlaceholderText("Message...")).toBeTruthy()
})

describe("Input value", () => {
  it("updates on change", () => {
    const {queryByPlaceholderText} = render(<UserInput/>)

    const messageInput = queryByPlaceholderText("Message...");

    fireEvent.change(messageInput, {target: {value: "test"}})

    expect(messageInput.value).toBe("test")
  })
})

describe("Send message", () => {
  describe("with no text", () => {
    it("does not trigger addMessage function", () => {
      const addMessage = jest.fn();

      const { queryByTestId } = render(<UserInput addMessage={addMessage} />)
      fireEvent.click(queryByTestId("submit-button"))
      expect(addMessage).not.toHaveBeenCalled()
    })
  })

  describe("with text" , () => {
    it("triggers addMessage function", () => {
      const addMessage = jest.fn();

      const { queryByTestId, queryByPlaceholderText } = render(<UserInput addMessage={addMessage} />)
      const messageInput = queryByPlaceholderText("Message...");
      fireEvent.change(messageInput, {target: {value: "test"}})

      fireEvent.click(queryByTestId("submit-button"))
      expect(addMessage).toHaveBeenCalled()
    })
  })
})
