import {ICourse} from "../models/course";
import {CourseTypeKeys, 
    ILoadCoursesSuccessAction, 
    ICreateCourseSuccessAction, 
    IUpdateCourseSuccessAction} from "./courseTypes";
import courseApi from "../api/mockCourseApi";
import {BeginAjaxCall, AjaxCallFailed} from "../actions/ajaxStatusActions";

// Action definitions for courses
// Action to create a course
export function CreateCourseSuccess(course: ICourse): ICreateCourseSuccessAction {
    return {
        type: CourseTypeKeys.CREATE_COURSE_SUCCESS,
        course: course
    };
}

// Action to update a course
export function UpdateCourseSuccess(course: ICourse): IUpdateCourseSuccessAction {
    return {
        type: CourseTypeKeys.UPDATE_COURSE_SUCCESS,
        course: course
    };
}

// Action to load courses
export function LoadCoursesSuccess(courses: Array<ICourse>): ILoadCoursesSuccessAction {
    return {
        type: CourseTypeKeys.LOAD_COURSES_SUCCESS,
        courses: courses
    };
}

// Thunk function to save a course
export function saveCourse(course: ICourse): (dispatch: any) => Promise<void>{
    return function(dispatch: any): Promise<void>{
        return courseApi.saveCourse(course).then((savedCourse: ICourse) => {
            course.id  ? dispatch(UpdateCourseSuccess(savedCourse)) : 
            dispatch(CreateCourseSuccess(savedCourse));
        }).catch((error: any) => {
            dispatch(AjaxCallFailed());
            throw(error);
        });
    };
}

// Thunk function to load all courses. We are using mockApi here, but we 
// can certainly choose to load courses from MongoDb or any other sources
export function loadCourse(): (dispatch: any) => Promise<void>
{
    return function(dispatch: any): Promise<void>{
        dispatch(BeginAjaxCall());
        return courseApi.getAllCourses().then((courses: Array<ICourse>) => {
            dispatch(LoadCoursesSuccess(courses));
        });
    };
}