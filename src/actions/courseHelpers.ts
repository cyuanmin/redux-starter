import courseApi from "../api/mockCourseApi";
import {LoadCoursesSuccess} from "./courseActions";
import {ICourse} from "./courseTypes";

export function loadCourse(): (dispatch: any) => Promise<void>
{
    return function(dispatch: any): Promise<void>{
        return courseApi.getAllCourses().then((courses: Array<ICourse>) => {
            dispatch(LoadCoursesSuccess(courses));
        });
    };
}