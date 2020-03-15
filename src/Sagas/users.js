/* Constants */
import { GET_METHOD, API_URL, USERS_ENDPOINT } from "../Utilities/Constants";

/* Sagas */
import { put, call, takeLatest } from "redux-saga/effects";

/* Actions */
import {
  GET_ALL_USERS,
  SUCCESS_GET_ALL_USERS,
  FAIL_GET_ALL_USERS
} from "../Redux/Actions";

/* Api */
import apiCall from "../Api";

export function* getAllUsers() {
  try {
    const result = yield call(apiCall, API_URL + USERS_ENDPOINT, GET_METHOD);
    if (result) yield put({ type: SUCCESS_GET_ALL_USERS, result });
    else
      yield put({
        type: FAIL_GET_ALL_USERS,
        errorMsg: "No se obtuvieron datos de la petición."
      });
  } catch (error) {
    yield put({
      type: FAIL_GET_ALL_USERS,
      errorMsg: "Hubo un error al realizar la petición."
    });
  }
}

//Watchers
export default function* users() {
  yield takeLatest(GET_ALL_USERS, getAllUsers);
}
