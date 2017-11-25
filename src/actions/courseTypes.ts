import {ICourse} from "../models/course";

export enum CourseTypeKeys{
    DELETE_COURSE = "DELETE_COURSE",
    LOAD_COURSES_SUCCESS = "LOAD_COURSES_SUCCESS",
    CREATE_COURSE_SUCCESS = "CREATE_COURSE_SUCCESS",
    UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS"
}

// Type definitions for courses
export interface IDeleteCourseAction {
    type: CourseTypeKeys.DELETE_COURSE;
    id: number;
}

export interface ICreateCourseSuccessAction {
    type: CourseTypeKeys.CREATE_COURSE_SUCCESS;
    course: ICourse;
}

export interface IUpdateCourseSuccessAction {
    type: CourseTypeKeys.UPDATE_COURSE_SUCCESS;
    course: ICourse;
}

export interface ILoadCoursesSuccessAction {
    type: CourseTypeKeys.LOAD_COURSES_SUCCESS;
    courses: Array<ICourse>;
}

export type CourseActionTypes =
IDeleteCourseAction | 
ILoadCoursesSuccessAction | 
ICreateCourseSuccessAction | 
IUpdateCourseSuccessAction;