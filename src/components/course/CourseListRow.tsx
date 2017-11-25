
import * as React from "react";
import { ICourse } from "../../models/course";
import { Link } from "react-router-dom";

// We will pass a course object to the CourseListRow component for display purpose
export interface ICourseListRowProp {
    course: ICourse;
}

// CourseListRow represents a single row of course summary. React.SFC is a nice helper that represents
// a function-style component (vs. class-style component)
const CourseListRow: React.SFC<ICourseListRowProp> = (props: ICourseListRowProp): JSX.Element => {
    const course: ICourse = props.course;
    return (
        <tr>
            <td><a href={course.watchHref} target="_blank">Watch</a></td>
            <td><Link to={'/course/' + props.course.id}>{course.title}</Link></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
        </tr>);
};

export default CourseListRow;