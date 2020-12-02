import React from "react";
import SearchResponse from "../../../mocks/responses/searchOffers.json";
import SearchNextResponse from "../../../mocks/responses/searchNextOffers.json";
import { render, screen, waitFor, fireEvent } from "../../../test-utils";
import Offers from "./Offers";

const ids = SearchResponse.offers.map((x) => x.id);
const nextIds = SearchNextResponse.offers.map((x) => x.id);

const noop = () => {};
Object.defineProperty(window, "scrollTo", { value: noop, writable: true });

describe("features/offers/components/Offers", () => {
  it("should display a page and load offers from an api upon initial load", async () => {
    render(<Offers />);

    expect(screen.getByRole("alert", { name: "loading" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "nextPage" })).toBeNull();
    expect(screen.getByText("Total: 0")).toBeInTheDocument();

    await waitFor(() => screen.findAllByRole("grid", { name: "photoCard" }));

    expect(screen.queryByRole("alert", { name: "loading" })).toBeNull();

    expect(
      screen.getByText(`Total: ${SearchResponse.metaData.cursor.totalCount}`)
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("button", { name: "nextPage" })
    ).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "previousPage" })).toBeNull();

    expect(screen.getAllByRole("grid", { name: "photoCard" })).toHaveLength(
      SearchResponse.offers.length
    );

    ids.forEach((x) => {
      expect(screen.getByTestId(x)).toBeInTheDocument();
    });
  });
  it("should display new set of photos when the user triggers a next page action", async () => {
    render(<Offers />);
    await waitFor(() => screen.findAllByRole("grid", { name: "photoCard" }));

    const button = screen.getByRole("button", { name: "nextPage" });
    if (button) {
      fireEvent.click(button);

      await waitFor(() => screen.findByRole("alert", { name: "loading" }));

      expect(
        screen.getByRole("alert", { name: "loading" })
      ).toBeInTheDocument();

      await waitFor(() => screen.findAllByRole("grid", { name: "photoCard" }));
      await waitFor(() =>
        screen.findByText(
          `Total: ${SearchNextResponse.metaData.cursor.totalCount}`
        )
      );

      expect(
        screen.getByText(
          `Total: ${SearchNextResponse.metaData.cursor.totalCount}`
        )
      ).toBeInTheDocument();

      expect(screen.queryByRole("alert", { name: "loading" })).toBeNull();

      expect(screen.getAllByRole("grid", { name: "photoCard" })).toHaveLength(
        SearchNextResponse.offers.length
      );

      nextIds.forEach((x) => {
        expect(screen.getByTestId(x)).toBeInTheDocument();
      });
    }
  });
  it("should display previous set of photos when the user triggers a previous page action", async () => {
    render(<Offers />);

    await waitFor(() => screen.findByRole("button", { name: "nextPage" }));

    const nextPageButton = screen.getByRole("button", { name: "nextPage" });

    fireEvent.click(nextPageButton);

    await waitFor(() => screen.findByTestId(SearchNextResponse.offers[0].id));
    await screen.findByRole("button", { name: "previousPage" });

    const previousPageButton = screen.getByRole("button", {
      name: "previousPage",
    });

    if (previousPageButton) {
      fireEvent.click(previousPageButton);

      await waitFor(() => screen.findByRole("alert", { name: "loading" }));
      await waitFor(() => screen.findByTestId(SearchResponse.offers[0].id));

      expect(screen.queryByRole("alert", { name: "loading" })).toBeNull();

      expect(screen.getAllByRole("grid", { name: "photoCard" })).toHaveLength(
        SearchNextResponse.offers.length
      );

      ids.forEach((x) => {
        expect(screen.getByTestId(x)).toBeInTheDocument();
      });
    }
  });
});
