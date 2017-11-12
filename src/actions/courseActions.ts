import {ICourse} from "../models/course";
import {TypeKeys, 
    ILoadCoursesSuccessAction, 
    ICreateCourseSuccessAction, 
    IUpdateCourseSuccessAction} from "./courseTypes";
import courseApi from "../api/mockCourseApi";

export function CreateCourseSuccess(course: ICourse): ICreateCourseSuccessAction {
    return {
        type: TypeKeys.CREATE_COURSE_SUCCESS,
        course: course
    };
}

export function UpdateCourseSuccess(course: ICourse): IUpdateCourseSuccessAction {
    return {
        type: TypeKeys.UPDATE_COURSE_SUCCESS,
        course: course
    };
}

export function LoadCoursesSuccess(courses: Array<ICourse>): ILoadCoursesSuccessAction {
    return {
        type: TypeKeys.LOAD_COURSES_SUCCESS,
        courses: courses
    };
}

export function saveCourse(course: ICourse): (dispatch: any) => Promise<void>{
    return function(dispatch: any): Promise<void>{
        return courseApi.saveCourse(course).then((savedCourse: ICourse) => {
            course.id  ? dispatch(UpdateCourseSuccess(savedCourse)) : 
            dispatch(CreateCourseSuccess(savedCourse));
        }).catch((error: any) => {
            throw(error);
        });
    };
}

export function loadCourse(): (dispatch: any) => Promise<void>
{
    return function(dispatch: any): Promise<void>{
        return courseApi.getAllCourses().then((courses: Array<ICourse>) => {
            dispatch(LoadCoursesSuccess(courses));
        });
    };
}