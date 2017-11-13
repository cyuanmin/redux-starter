import {combineReducers} from "redux";
import {ICourse} from "../models/course";
import {courseReducer as courses} from "./courseReducer";
import {authorReducer as authors} from "./authorReducer";
import {ajaxStatusReducer as ajaxCallsInProgress} from "./ajaxStatusReducer";

export const rootReducer: any = combineReducers({
    courses, authors, ajaxCallsInProgress
});