import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { authReducer } from "./auth/reducer.js";
import { notificationReducer } from "./notification/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  notifications: notificationReducer,
});

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);
