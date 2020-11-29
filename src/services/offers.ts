import { OffersResponse } from "../types";
import { OfferEntity } from "../models/Offer";

const basePath = "https://api.holidu.com/rest/v6/search";
const resource = "offers";

export async function searchOffers(term: string): Promise<OfferEntity[]> {
  const response = await fetch(
    `${basePath}/${resource}?searchTerm=${term}`
  ).then((x) => (x.json() as unknown) as OffersResponse);
  return response.offers;
}
