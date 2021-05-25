import { combineReducers } from "redux";
import { memberReducer } from "./personReducer";

const rootReducer = combineReducers({ memberReducer });

export default rootReducer;
