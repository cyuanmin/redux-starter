import {combineReducers} from "redux";
import {ICourse} from "../models/course";
import {courseReducer as courses} from "./courseReducer";
import {authorReducer as authors} from "./authorReducer";
import {ajaxStatusReducer as ajaxCallsInProgress} from "./ajaxStatusReducer";

// The root reducer will assemble all "child" reducers. Each child reducer
// must be named correctly based on the global app state (i.e. IAppState in configStore.ts)
// In other words, when we change IAppState's properties, we need to update rootReducer
// also to make sure that names match (courses=>courses, authors=>authors, ajaxCallsInProgress=>ajaxCallsInProgress)
export const rootReducer: any = combineReducers({
    courses, authors, ajaxCallsInProgress
});