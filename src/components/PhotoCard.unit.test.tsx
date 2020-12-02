import React from "react";
import { render, screen } from "@testing-library/react";
import PhotoCard from "./PhotoCard";

describe("components/PhotoCard", () => {
  it("should render", () => {
    render(
      <PhotoCard
        id="test"
        footerAvatarAltText="footerAltText"
        footerAvatarSrc="footerAvatarSrc"
        footerDescription="footerDescription"
        guestCount="guestCount"
        imageAltText="imageAltText"
        imageDescription="imageDescription"
        imageSrc="imageSrc"
        imageTitle="imageTitle"
        locationName="locationName"
        price="price"
        priceBreakdown="priceBreakdown"
        priceDescription="priceDescription"
        ratingCount="ratingCount"
        ratingValue="ratingValue"
        locationLink="locationLink"
        viewLink="viewLink"
      />
    );

    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("footerDescription")).toBeInTheDocument();
    expect(screen.getByText("guestCount")).toBeInTheDocument();
    expect(screen.getByText("imageDescription")).toBeInTheDocument();
    expect(screen.getByText("imageTitle")).toBeInTheDocument();
    expect(screen.getByText("locationName")).toBeInTheDocument();
    expect(screen.getByText("price")).toBeInTheDocument();
    expect(screen.getByText("priceBreakdown")).toBeInTheDocument();
    expect(screen.getByText("(ratingCount)")).toBeInTheDocument();
    expect(screen.getByText("ratingValue")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "locationLink" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "productLink" })
    ).toBeInTheDocument();
  });
});
