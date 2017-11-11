import {combineReducers} from "redux";
import {ICourse} from "../actions/courseActions"
import {courseReducer as courses} from "./courseReducer";

const rootReducer = combineReducers<Array<ICourse>>({
    courses
});

export default rootReducer;