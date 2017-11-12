
import * as React from "react";
import { ICourse } from "../../models/course";

export interface ICourseFormProp {
    course: ICourse;
}
/*
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
*/