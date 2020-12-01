import { rest } from "msw";
import { SEARCH_OFFERS_ENDPOINT } from "../services/offers";
import searchOffers from "./responses/searchOffers.json";

export const handlers = [
  rest.get(SEARCH_OFFERS_ENDPOINT, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(searchOffers));
  }),
];
