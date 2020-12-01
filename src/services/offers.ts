import { OffersResponse, Cursor } from "../types";
import { OfferEntity, transformOfferResponseToEntity } from "../models/offer";
import { basePath } from "../app/config";

const resource = "offers";
export const SEARCH_OFFERS_ENDPOINT = `${basePath}/rest/v6/search/${resource}`;

export interface OffersSearchResponse {
  entities: OfferEntity[];
  cursor: Cursor;
}

export async function searchOffers(
  term: string
): Promise<OffersSearchResponse> {
  const response = await fetch(
    `${SEARCH_OFFERS_ENDPOINT}?searchTerm=${term}`
  ).then((x) => (x.json() as unknown) as OffersResponse);
  const entities = response.offers.map(transformOfferResponseToEntity);
  return {
    entities,
    cursor: response.metaData.cursor,
  };
}

export async function fetchSearchOffersFromPath(
  path: string
): Promise<OffersSearchResponse> {
  const response = await fetch(`${basePath}/${path}`).then(
    (x) => (x.json() as unknown) as OffersResponse
  );
  const entities = response.offers.map(transformOfferResponseToEntity);
  return {
    entities,
    cursor: response.metaData.cursor,
  };
}
