import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import auth from "./reducers/authReducer";
// import reducers from "./reducers";

export default createStore(
    combineReducers({auth}),
    {},
    applyMiddleware(createLogger(), thunk)
);
