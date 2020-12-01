import { call, put } from "redux-saga/effects";
import {
  searchOffers,
  nextSearchOffers,
  previousSearchOffers,
} from "./offerSaga";
import {
  offersReceived,
  offersCursorReceived,
  toggleIsLoading,
  offersErrorReceived,
} from "../features/offers/offersSlice";
import * as api from "../services/offers";

const state = {
  offers: {
    nextPage: "nextPage",
    previousPage: "previousPage",
  },
};
const response = {
  entities: [],
  cursor: {
    nextPage: "nextPage",
    previousPage: "previousPage",
    totalCount: 0,
  },
};

describe("sagas/offerSaga", () => {
  it("should fetch offers and properly dispatch actions", () => {
    const generator = searchOffers();

    expect(generator.next().value).toEqual(put(toggleIsLoading()));

    expect(generator.next().value).toEqual(
      call(api.searchOffers, "Mallorca,%20Spanien")
    );

    expect(generator.next(response).value).toEqual(
      put(offersReceived(response.entities))
    );

    expect(generator.next().value).toEqual(
      put(offersCursorReceived(response.cursor))
    );

    expect(generator.next().value).toEqual(put(toggleIsLoading()));
  });

  it("should catch search errors", () => {
    const errorGenerator = searchOffers();
    const searchError = "Oops something went wrong while searching offers";
    errorGenerator.next();
    errorGenerator.next();

    expect(errorGenerator.throw("error").value).toEqual(
      put(offersErrorReceived(searchError))
    );
  });

  it("should fetch next page for search offers", () => {
    const generator = nextSearchOffers();
    generator.next();

    expect(generator.next(state).value).toEqual(put(toggleIsLoading()));
    expect(generator.next().value).toEqual(put(offersReceived([])));
    expect(generator.next().value).toEqual(
      call(api.fetchSearchOffersFromPath, state.offers.nextPage)
    );
    expect(generator.next(response).value).toEqual(
      put(offersReceived(response.entities))
    );

    expect(generator.next().value).toEqual(
      put(offersCursorReceived(response.cursor))
    );
    expect(generator.next(state).value).toEqual(put(toggleIsLoading()));
  });

  it("should catch search next errors", () => {
    const errorGenerator = nextSearchOffers();
    const searchError = "Oops something went wrong while searching next offers";
    errorGenerator.next();
    errorGenerator.next(state);
    errorGenerator.next();
    errorGenerator.next();

    expect(errorGenerator.throw("error").value).toEqual(
      put(offersErrorReceived(searchError))
    );
  });

  it("should fetch previous page for search offers", () => {
    const generator = previousSearchOffers();
    generator.next();

    expect(generator.next(state).value).toEqual(put(toggleIsLoading()));
    expect(generator.next().value).toEqual(put(offersReceived([])));
    expect(generator.next().value).toEqual(
      call(api.fetchSearchOffersFromPath, state.offers.previousPage)
    );
    expect(generator.next(response).value).toEqual(
      put(offersReceived(response.entities))
    );

    expect(generator.next().value).toEqual(
      put(offersCursorReceived(response.cursor))
    );
    expect(generator.next(state).value).toEqual(put(toggleIsLoading()));
  });

  it("should catch search previous errors", () => {
    const errorGenerator = previousSearchOffers();
    const searchError =
      "Oops something went wrong while searching previous offers";
    errorGenerator.next();
    errorGenerator.next(state);
    errorGenerator.next();
    errorGenerator.next();

    expect(errorGenerator.throw("error").value).toEqual(
      put(offersErrorReceived(searchError))
    );
  });
});
