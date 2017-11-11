import * as React from "react";
import CourseListRow from "./CourseListRow";
import { ICourse } from "../../actions/courseTypes";

export interface ICourseListProp {
    courses: Array<ICourse>;
}

const CourseList: React.SFC<ICourseListProp> = (props: ICourseListProp): JSX.Element => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>
                {props.courses.map((course: ICourse) =>
                    <CourseListRow key={course.id} course={course}/>
                )}
            </tbody>
        </table>
    );
};

export default CourseList;