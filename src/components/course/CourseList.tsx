import * as React from "react";
import CourseListRow from "./CourseListRow";
import { ICourse } from "../../models/course";

export interface ICourseListProp {
    courses: Array<ICourse>;
}

// Show the summary of a list of courses using function-style component helper (React.SFC).
// A course list is composed of a list of CourseListRow
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