import {ICourse} from "../models/course";
import {TypeKeys, ICreateCourseAction, ILoadCoursesSuccessAction} from "./courseTypes";

// action functions
export function CreateCourse(course: ICourse): ICreateCourseAction {
    return {
        type: TypeKeys.CREATE_COURSE,
        course: course
    };
}

export function LoadCoursesSuccess(courses: Array<ICourse>): ILoadCoursesSuccessAction {
    return {
        type: TypeKeys.LOAD_COURSES_SUCCESS,
        courses: courses
    };
}