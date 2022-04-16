import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import routeReducer from "./reducer/allReducers.js";
import {composeWithDevTools} from "redux-devtools-extension"

const store= createStore(
  routeReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;