/* Redux */
import { createStore, applyMiddleware } from "redux";

/* Reducers */
import combinedReducers from "../Reducers/combineReducers";

/* Saga */
import reduxSaga from "redux-saga";

const sagaMiddleware = reduxSaga();

export default function configureStore() {
  return {
    ...createStore(combinedReducers, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run
  };
}
