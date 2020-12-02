import { searchOffers, fetchSearchOffersFromPath } from "./offers";
import searchOffersResponse from "../mocks/responses/searchOffers.json";
import searchNextOffersResponse from "../mocks/responses/searchNextOffers.json";

describe("services/offers", () => {
  it("should search the api for offers based on the search term", async () => {
    const searchTerm = "Mallorca,%20Spanien";
    const offersResponses = searchOffersResponse.offers;

    const { entities, cursor } = await searchOffers(searchTerm);

    expect(entities.length).toBe(offersResponses.length);
    expect(entities.map((x) => x.id)).toEqual(offersResponses.map((x) => x.id));
    expect(cursor).toEqual(searchOffersResponse.metaData.cursor);
  });

  it("should search the api based from relative path", async () => {
    const path =
      "/rest/v6/search/offers?searchTerm=Mallorca,%20Spanien&pageIndex=1&pageSize=30";
    const offersResponses = searchNextOffersResponse.offers;

    const { entities, cursor } = await fetchSearchOffersFromPath(path);

    expect(entities.length).toBe(offersResponses.length);
    expect(entities.map((x) => x.id)).toEqual(offersResponses.map((x) => x.id));
    expect(cursor).toEqual(searchNextOffersResponse.metaData.cursor);
  });
});
