import * as React from "react";
import {ICourse} from "../../actions/courseActions";
import {connect} from "react-redux";
import {ReducersMapObject} from "redux";
import {ICreateCourseAction, TypeKeys} from "../../actions/courseActions";
import {IAppState} from "../../stores/configStore";

export interface ICourseProps {
    name: string;
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
        (this.props as any).dispatch({
            type: TypeKeys.CREATE_COURSE,
            course: this.state.course
        });
    }

    public render(): JSX.Element {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange}
                value ={this.state.course.title} />
                <input type="submit" value="Save" onClick={this.onClickSave}/>
            </div>
        );
    }
}

function mapStateToProps(state: IAppState, ownProps: ICourseProps): any{
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps, null)(CoursePage);