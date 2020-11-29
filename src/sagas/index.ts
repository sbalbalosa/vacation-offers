import { all } from "redux-saga/effects";
import offerSaga from "./offerSaga";

export default function* rootSaga() {
  yield all([offerSaga()]);
}
