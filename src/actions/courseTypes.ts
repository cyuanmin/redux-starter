import {ICourse} from "../models/course";

export enum TypeKeys{
    CREATE_COURSE = "CREATE_COURSE",
    DELETE_COURSE = "DELETE_COURSE",
    LOAD_COURSES_SUCCESS= "LOAD_COURSES_SUCCESS"
}

export interface ICreateCourseAction {
    type: TypeKeys.CREATE_COURSE;
    course: ICourse;
}

export interface IDeleteCourseAction {
    type: TypeKeys.DELETE_COURSE;
    id: number;
}

export interface ILoadCoursesSuccessAction {
    type: TypeKeys.LOAD_COURSES_SUCCESS;
    courses: Array<ICourse>;
}

export type ActionTypes = ICreateCourseAction | IDeleteCourseAction | ILoadCoursesSuccessAction;