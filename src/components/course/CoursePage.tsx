import * as React from "react";
import {ICourse} from "../../models/course";
import {IDeleteCourseAction, ActionTypes, TypeKeys} from "../../actions/courseTypes";
import {connect} from "react-redux";
import {ReducersMapObject, bindActionCreators} from "redux";
import * as courseActions from "../../actions/courseActions";
import {IAppState} from "../../stores/configStore";
import CourseList from "./CourseList";
import {Redirect} from "react-router";

export interface ICourseProps {
    name: string;
    courses: Array<ICourse>; // Redux properties. See mapStateToProps()
    actions: typeof courseActions; // Redux actions. See mapStateToProps()
}

export interface ICourseState {
    course: ICourse;
    navigate: boolean;
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
            },
            navigate: false
        };

        this.onTitleChange = this.onTitleChange.bind(this);
    }

    public onTitleChange(ev: any): void {
        const course: ICourse = this.state.course;
        course.title = ev.target.value;
        this.setState({course: course});
    }

    public render(): JSX.Element {
        const courses: Array<ICourse> = this.props.courses;
        const navigate: boolean = this.state.navigate;

        if (navigate) {
            return <Redirect to="/course/test" push={true}/>;
        }
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit"
                value="Add Course"
                className="btn btn-primary"
                onClick={(): void => this.setState({navigate: true})}/>
                <CourseList courses={courses}/>
            </div>
        );
    }
}

function mapStateToProps(state: IAppState, ownProps: ICourseProps): any{
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch: any): any{
    return {
        // https://stackoverflow.com/questions/42888184/how-to-resolve-typescript-redux-connect-error-actioncreatorsmapobject
        actions: bindActionCreators<any>(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);