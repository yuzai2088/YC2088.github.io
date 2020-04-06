


import {combineReducers} from "redux-immutable";
import { data } from "./data";
import { banner } from "./banner";

export const reducers = combineReducers({
    data:data,
    banner:banner
})