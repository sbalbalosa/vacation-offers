import { call, put, takeEvery } from "redux-saga/effects";
import * as api from "../services/offers";
import { offersReceived, fetchOffers } from "../features/offers/offersSlice";

export function* searchOffers() {
  // try {
  const offers = yield call(api.searchOffers, "Mallorca,%20Spanien");
  yield put(offersReceived(offers));
  // } catch (e) {
  //   yield put()
  // }
}

export default function* offersSaga() {
  yield takeEvery(fetchOffers.toString(), searchOffers);
}
