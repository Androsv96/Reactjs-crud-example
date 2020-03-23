/* Constants */
import { GET_METHOD, API_URL, USERS_ENDPOINT } from "../Utilities/Constants";

/* Sagas */
import { put, call, takeLatest } from "redux-saga/effects";

/* Actions */
import {
  GET_ALL_USERS_INIT,
  GET_ALL_USERS_SUCCESS,
  SET_NEW_ERROR
} from "../Redux/Actions";

/* Api */
import apiCall from "../Api";

export function* getAllUsers() {
  try {
    const payload = yield call(apiCall, API_URL + USERS_ENDPOINT, GET_METHOD);

    if (payload.error) {
      yield put({ type: SET_NEW_ERROR, errorMsg: payload.errorMsg });
    } else {
      yield put({ type: GET_ALL_USERS_SUCCESS, payload });
    }
  } catch (error) {
    yield put({
      type: SET_NEW_ERROR,
      errorMsg: "Hubo un problema al realizar la petición."
    });
  }
}

//Watchers
export default function* users() {
  yield takeLatest(GET_ALL_USERS_INIT, getAllUsers);
}
