import {ICourse, TypeKeys, ICreateCourseAction, ILoadCoursesSuccessAction} from "./courseTypes";
import courseApi from "../api/mockCourseApi";

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

export function loadCourse(): (dispatch: any) => Promise<void>
{
    return function(dispatch: any): Promise<void>{
        return courseApi.getAllCourses().then((courses: Array<ICourse>) => {
            dispatch(LoadCoursesSuccess(courses));
        });
    };
}