import { call, put } from "redux-saga/effects";
import { searchOffers } from "./offerSaga";
import { offersReceived } from "../features/offers/offersSlice";
import * as api from "../services/offers";

describe("sagas/offerSaga", () => {
  it("should fetch offers successfully", () => {
    const generator = searchOffers();

    expect(generator.next().value).toEqual(
      call(api.searchOffers, "Mallorca,%20Spanien")
    );

    expect(generator.next([]).value).toEqual(put(offersReceived([])));
  });
});
