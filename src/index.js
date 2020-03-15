/* React */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

/* Components */
import App from "./App";
import configureStore from "./Redux/Store";

/* Saga */
import rootSaga from "./Sagas/";

let store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
