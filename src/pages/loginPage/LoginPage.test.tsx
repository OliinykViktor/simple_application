import React from "react";
import { 
  render, 
  screen, 
  fireEvent
} from "@testing-library/react";

import LoginPage from "./LoginPage";
import useLogin from "../../core/hooks/useLogin";

jest.mock("../../core/hooks/useLogin");

describe("LoginPage", () => {
  it("renders the login form", () => {
    (useLogin as jest.Mock).mockReturnValue({
      username: "",
      setUsername: jest.fn(),
      password: "",
      setPassword: jest.fn(),
      handleSubmit: jest.fn(),
    });

    render(<LoginPage />);
    expect(screen.getByTestId("load-title")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByTestId("load-submit-button")).toBeInTheDocument();
  });

  it("submits the form successfully", () => {
    const handleSubmitMock = jest.fn();
    (useLogin as jest.Mock).mockReturnValue({
      username: "user",
      setUsername: jest.fn(),
      password: "password",
      setPassword: jest.fn(),
      handleSubmit: handleSubmitMock,
    });

    render(<LoginPage />);
    fireEvent.submit(screen.getByRole("button"));

    expect(handleSubmitMock).toHaveBeenCalled();
  });
});
