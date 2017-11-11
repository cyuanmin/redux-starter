import {combineReducers} from "redux";
import {ICourse} from "../actions/courseActions"
import {courseReducer as courses} from "./courseReducer";

export const rootReducer = combineReducers<Array<ICourse>>({
    courses
});