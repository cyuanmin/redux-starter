
import * as React from "react";
import { ICourse } from "../../actions/courseTypes";
import { Link } from "react-router-dom";

export interface ICourseListRowProp {
    course: ICourse;
}
const CourseListRow: React.SFC<ICourseListRowProp> = (props: ICourseListRowProp): JSX.Element => {
    return (
        <tr>
            <td><a href={props.course.watchHref} target="_blank">Watch</a></td>
            <td><Link to={'/course' + props.course.id}>{props.course.title}</Link></td>
            <td>{props.course.authorId}</td>
            <td>{props.course.category}</td>
            <td>{props.course.length}</td>
        </tr>);
};

export default CourseListRow;