/* Sagas */
import { all } from "redux-saga/effects";

/* Components */
import users from "./users";

export default function* rootSaga() {
  yield all([users()]);
}
