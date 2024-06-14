import React from "react";
import { 
  screen, 
  render, 
  fireEvent
} from "@testing-library/react";

import Input from "./index";

describe("Input component", () => {
  it("renders with default props", () => {
    render(<Input value="" setParams={() => { }} />);
    const inputElement = screen.getByTestId("Password-input");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "password");
    expect(inputElement).toHaveAttribute("placeholder", "Password");
  });

  it("calls setParams on input change", () => {
    const setParamsMock = jest.fn();
    render(<Input value="" setParams={setParamsMock} />);
    const inputElement = screen.getByTestId("Password-input");
    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(setParamsMock).toHaveBeenCalledWith("test");
  });

  it("calls setParams on input change", () => {
    const setParamsMock = jest.fn();
    render(<Input value="" setParams={setParamsMock} />);
    const inputElement = screen.getByTestId("Password-input");
    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(setParamsMock).toHaveBeenCalledWith("test");
  });
})