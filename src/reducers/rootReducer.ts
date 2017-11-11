import {combineReducers} from "redux";
import {ICourse} from "../actions/courseTypes";
import {courseReducer as courses} from "./courseReducer";

export const rootReducer: any = combineReducers<Array<ICourse>>({
    courses
});