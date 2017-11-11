import * as React from "react";
import {ICourse, IDeleteCourseAction, ActionTypes, TypeKeys} from "../../actions/courseTypes";
import {connect} from "react-redux";
import {ReducersMapObject, bindActionCreators} from "redux";
import * as courseActions from "../../actions/courseActions";
import {IAppState} from "../../stores/configStore";

export interface ICourseProps {
    name: string;
    courses: Array<ICourse>; // Redux properties. See mapStateToProps()
    actions: typeof courseActions; // Redux actions. See mapStateToProps()
}

export interface ICourseState {
    course: ICourse;
}

class CoursePage extends React.Component<ICourseProps, ICourseState> {
    constructor(props: ICourseProps) {
        super(props);
        this.state = {
            course: {
                id: "",
                title: "",
                watchHref: "",
                authorId: "",
                length: "",
                category: ""
            }
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
        this.props.actions.CreateCourse(this.state.course);
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
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);