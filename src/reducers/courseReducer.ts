import {Action} from "redux";
import {ICourse} from "../models/course";
import {CourseActionTypes, CourseTypeKeys} from "../actions/courseTypes";
import {defaultCourses} from "../stores/initialStates";

export function courseReducer(state: Array<ICourse> = defaultCourses, action: CourseActionTypes): Array<ICourse>{
    switch (action.type) {
        case CourseTypeKeys.CREATE_COURSE_SUCCESS: {
            return [...state, Object.assign({}, action.course)];
        }

        case CourseTypeKeys.UPDATE_COURSE_SUCCESS: {
            return [
                ...state.filter((course: ICourse) => course.id !== action.course.id), Object.assign({}, action.course)
            ];
        }

        case CourseTypeKeys.LOAD_COURSES_SUCCESS: {
            return action.courses;
        }
        
        default:
            return state;
    }
}