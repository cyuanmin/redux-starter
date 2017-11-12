import {combineReducers} from "redux";
import {ICourse} from "../models/course";
import {courseReducer as courses} from "./courseReducer";

export const rootReducer: any = combineReducers<Array<ICourse>>({
    courses
});