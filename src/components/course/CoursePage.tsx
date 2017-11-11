import * as React from "react";
import {ICourse, IDeleteCourseAction} from "../../actions/courseActions";
import {connect} from "react-redux";
import {ReducersMapObject} from "redux";
import {ActionTypes, TypeKeys} from "../../actions/courseActions";
import {IAppState} from "../../stores/configStore";

export interface ICourseProps {
    name: string;
    courses: Array<ICourse>; // Redux properties
    createCourse: (course: ICourse) => void; // // Redux functions
}

export interface ICourseState {
    course: ICourse;
}

class CoursePage extends React.Component<ICourseProps, ICourseState> {
    constructor(props: ICourseProps) {
        super(props);
        this.state = {
            course: {title: ""}
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    public onTitleChange(ev: any): void {
        const course: ICourse = this.state.course;
        course.title = ev.target.value;
        this.setState({course: course});
    }

    
    public onClickSave(ev: any): void {
        this.props.createCourse(this.state.course);
    }

    public render(): JSX.Element {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.renderCourseRow)}
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange}
                value ={this.state.course.title} />
                <input type="submit" value="Save" onClick={this.onClickSave}/>
            </div>
        );
    }

    private renderCourseRow(course: ICourse, index: number): JSX.Element {
        return <div key={index}>
        {course.title}
        </div>;
    }
}

function mapStateToProps(state: IAppState, ownProps: ICourseProps): any{
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch: any): any{
    return {
        createCourse: (course: ICourse): any => dispatch({
            type: TypeKeys.CREATE_COURSE,
            course: course
        })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);