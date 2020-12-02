import { rest } from "msw";
import { SEARCH_OFFERS_ENDPOINT } from "../services/offers";
import searchOffers from "./responses/searchOffers.json";
import searchNextOffers from "./responses/searchNextOffers.json";

export const handlers = [
  rest.get(SEARCH_OFFERS_ENDPOINT, (req, res, ctx) => {
    const pageIndex = req.url.searchParams.get("pageIndex");
    if (pageIndex) {
      if (pageIndex === "0") {
        return res(ctx.status(200), ctx.json(searchOffers));
      }
      return res(ctx.status(200), ctx.json(searchNextOffers));
    }
    return res(ctx.status(200), ctx.json(searchOffers));
  }),
];
