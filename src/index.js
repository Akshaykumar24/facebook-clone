import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
