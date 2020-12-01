import { searchOffers } from "./offers";
import searchOffersResponse from "../mocks/responses/searchOffers.json";

describe("services/offers", () => {
  it("should generate the same number of entities based from response", async () => {
    const searchTerm = "Mallorca,%20Spanien";
    const offersResponses = searchOffersResponse.offers;

    const entities = await searchOffers(searchTerm);

    expect(entities.length).toBe(offersResponses.length);
    expect(entities.map((x) => x.id)).toEqual(offersResponses.map((x) => x.id));
  });
});
