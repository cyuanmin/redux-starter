import {Action} from "redux";
import {ICourse} from "../models/course";
import {CourseActionTypes, CourseTypeKeys} from "../actions/courseTypes";
import {defaultCourses} from "../stores/initialStates";

// A reducer responsible for handling course-related actions. As a rule, we cannot modify existing state, and can
// only return copies of the existing state.
export function courseReducer(state: Array<ICourse> = defaultCourses, action: CourseActionTypes): Array<ICourse>{
    switch (action.type) {
        case CourseTypeKeys.CREATE_COURSE_SUCCESS: {
            return [...state, Object.assign({}, action.course)]; // A course is created successfully. 
            // We will package the new course into a new array
        }

        case CourseTypeKeys.UPDATE_COURSE_SUCCESS: {
            return [
                ...state.filter((course: ICourse) => course.id !== action.course.id), Object.assign({}, action.course)
                // A course needs to be updated. We will replace the current copy with the updated course
            ];
        }

        case CourseTypeKeys.LOAD_COURSES_SUCCESS: {
            return action.courses; // Return a list of courses (most likely loaded when we start the React application)
        }
        
        default:
            return state; // For unrecognized actions, we will not modify the application state, and will simply
            //return the existing state object.
    }
}