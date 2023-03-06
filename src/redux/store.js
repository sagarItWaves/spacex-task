import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

export const getState = () => {
  return Store.getState();
};

export { Store };
