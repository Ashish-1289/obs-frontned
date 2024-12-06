import { all } from "redux-saga/effects";
import { watchLoginSaga } from "./login/loginSagas";

export function* rootSaga() {
  yield all([
    watchLoginSaga(),
  ]);
}