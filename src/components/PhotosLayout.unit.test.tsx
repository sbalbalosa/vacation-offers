import React from "react";
import { render, screen } from "@testing-library/react";
import PhotosLayout from "./PhotosLayout";

describe("components/PhotosLayout", () => {
  it("should render", () => {
    render(<PhotosLayout>test</PhotosLayout>);

    expect(
      screen.getByRole("grid", { name: "photos grid" })
    ).toBeInTheDocument();
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
