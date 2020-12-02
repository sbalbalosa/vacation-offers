import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("components/Loading", () => {
  it("should render the component", () => {
    render(<Loading />);

    expect(screen.getByRole("alert")).toBeInTheDocument();
  });
});
