import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { UserDataContextProvider } from "./components/Context/UserDataContext"
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserDataContextProvider>
        <BrowserRouter>
          <GlobalStyles />
          <App />
        </BrowserRouter>
      </UserDataContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
