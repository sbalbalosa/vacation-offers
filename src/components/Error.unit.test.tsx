import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Error from "./Error";

describe("components/Error", () => {
  it("should invoke back upon press of the button", () => {
    const method = jest.fn();
    render(<Error message="test" onBack={method} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(method).toHaveBeenCalled();
  });

  it("should render the component", () => {
    render(<Error message="test" onBack={jest.fn()} />);

    expect(screen.getByRole("alert")).toHaveTextContent("test");
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
