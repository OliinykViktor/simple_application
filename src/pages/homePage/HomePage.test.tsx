import React from "react";
import { render, screen } from "@testing-library/react";

import HomePage from "./HomePage";

describe("HomePage", () => {
  it("renders the homepage message", () => {
    render(<HomePage />);
    const headingElement = screen.getByText(/Hello, World!/i);
    expect(headingElement).toBeInTheDocument();
  });
});