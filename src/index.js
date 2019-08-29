import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import {store, persistor} from "./store/configureStore";
import { PersistGate } from "redux-persist/integration/react"

// THIS MAKES THE STORE ACCESSIBLE FROM CONSOLE ON CHROME - GOOD FOR DEBUGGING
import { login } from "./actions/index";
window.store = store;
window.login = login;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />,
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
