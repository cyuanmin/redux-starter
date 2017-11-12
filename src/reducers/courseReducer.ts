import {Action} from "redux";
import {ICourse} from "../models/course";
import {ActionTypes, TypeKeys} from "../actions/courseTypes";

export function courseReducer(state: Array<ICourse> = [], action: ActionTypes): Array<ICourse>{
    switch (action.type) {
        case TypeKeys.CREATE_COURSE: {
            return [...state, Object.assign({}, action.course)];
        }

        case TypeKeys.LOAD_COURSES_SUCCESS: {
            return action.courses;
        }
        
        default:
            return state;
    }
}