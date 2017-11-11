import {ICourse, TypeKeys, ICreateCourseAction} from "./courseTypes";

// action functions
export function CreateCourse(course: ICourse): ICreateCourseAction {
    return {
        type: TypeKeys.CREATE_COURSE,
        course: course
    };
}