import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//Provider wrapper to init store thorughout the components
import { Provider } from "react-redux";
import store from "./store";

//Pages and Components
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
