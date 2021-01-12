import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import UserContextProvider from "./contexts/UserContext";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"

ReactDOM.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
