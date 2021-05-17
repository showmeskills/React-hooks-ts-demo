import { combineReducers } from "redux";

import {countReducer} from "./Counter/counterReducer";


export const rootReducer = combineReducers({
    countReducer
})