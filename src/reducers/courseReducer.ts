import {Action} from "redux";
import {ActionTypes, TypeKeys, ICourse} from "../actions/courseTypes";

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