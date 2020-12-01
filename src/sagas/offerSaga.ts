import { call, put, takeEvery, select, all } from "redux-saga/effects";
import * as api from "../services/offers";
import {
  offersCursorReceived,
  offersReceived,
  fetchOffers,
  toggleIsLoading,
  nextSearch,
  previousSearch,
  offersErrorReceived,
} from "../features/offers/offersSlice";

export function* searchOffers() {
  yield put(toggleIsLoading());
  try {
    const response = yield call(api.searchOffers, "Mallorca,%20Spanien");
    yield put(offersReceived(response.entities));
    yield put(offersCursorReceived(response.cursor));
  } catch (e) {
    yield put(
      offersErrorReceived("Oops something went wrong while searching offers")
    );
  }
  yield put(toggleIsLoading());
}

export function* nextSearchOffers() {
  const state = yield select();
  const { nextPage } = state.offers;
  if (nextPage) {
    yield put(toggleIsLoading());
    yield put(offersReceived([]));
    try {
      const response = yield call(api.fetchSearchOffersFromPath, nextPage);
      yield put(offersReceived(response.entities));
      yield put(offersCursorReceived(response.cursor));
    } catch (e) {
      yield put(
        offersErrorReceived(
          "Oops something went wrong while searching next offers"
        )
      );
    }

    yield put(toggleIsLoading());
  }
}

export function* previousSearchOffers() {
  const state = yield select();
  const { previousPage } = state.offers;
  if (previousPage) {
    yield put(toggleIsLoading());
    yield put(offersReceived([]));
    try {
      const response = yield call(api.fetchSearchOffersFromPath, previousPage);
      yield put(offersReceived(response.entities));
      yield put(offersCursorReceived(response.cursor));
    } catch (e) {
      yield put(
        offersErrorReceived(
          "Oops something went wrong while searching previous offers"
        )
      );
    }
    yield put(toggleIsLoading());
  }
}

export default function* offersSaga() {
  yield all([
    takeEvery(fetchOffers.toString(), searchOffers),
    takeEvery(nextSearch.toString(), nextSearchOffers),
    takeEvery(previousSearch.toString(), previousSearchOffers),
  ]);
}
