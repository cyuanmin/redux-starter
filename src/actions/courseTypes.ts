import {ICourse} from "../models/course";

export enum TypeKeys{
    DELETE_COURSE = "DELETE_COURSE",
    LOAD_COURSES_SUCCESS = "LOAD_COURSES_SUCCESS",
    CREATE_COURSE_SUCCESS = "CREATE_COURSE_SUCCESS",
    UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS"
}

export interface IDeleteCourseAction {
    type: TypeKeys.DELETE_COURSE;
    id: number;
}

export interface ICreateCourseSuccessAction {
    type: TypeKeys.CREATE_COURSE_SUCCESS;
    course: ICourse;
}

export interface IUpdateCourseSuccessAction {
    type: TypeKeys.UPDATE_COURSE_SUCCESS;
    course: ICourse;
}

export interface ILoadCoursesSuccessAction {
    type: TypeKeys.LOAD_COURSES_SUCCESS;
    courses: Array<ICourse>;
}

export type ActionTypes =
IDeleteCourseAction | 
ILoadCoursesSuccessAction | 
ICreateCourseSuccessAction | 
IUpdateCourseSuccessAction;