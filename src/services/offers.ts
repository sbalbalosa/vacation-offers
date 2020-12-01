import { OffersResponse } from "../types";
import { OfferEntity, transformOfferResponseToEntity } from "../models/offer";
import { basePath } from "../app/config";

const resource = "offers";
export const SEARCH_OFFERS_ENDPOINT = `${basePath}/${resource}`;

export async function searchOffers(term: string): Promise<OfferEntity[]> {
  const response = await fetch(
    `${SEARCH_OFFERS_ENDPOINT}?searchTerm=${term}`
  ).then((x) => (x.json() as unknown) as OffersResponse);
  return response.offers.map(transformOfferResponseToEntity);
}
