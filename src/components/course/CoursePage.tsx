import * as React from "react";
import {ICourse} from "../../models/course";
import {IDeleteCourseAction, CourseActionTypes, CourseTypeKeys} from "../../actions/courseTypes";
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
    navigate: boolean; // In react, we use state property to decide whether to redirect or not.
    // After clicking the "Add course" button, we will navigate to /course page for editing 
    // a brand-new course
}

// The course page allows users to add a course and to review summaries of all exising courses
class CoursePage extends React.Component<ICourseProps, ICourseState> {
    constructor(props: ICourseProps) {
        super(props);
        this.state = {
            navigate: false // By default, no need to navigate
        };
    }

    public render(): JSX.Element {
        const courses: Array<ICourse> = this.props.courses;
        const navigate: boolean = this.state.navigate;

        if (navigate) {
            return <Redirect to="/course" push={true}/>; // redirecting to course page for editing brand-new course
        }
        return (
            // Display "Add Course" button as well as showing all courses
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

// Convert redux state (i.e. IAppState) to Compnent properties (i.e. courses). It should be noted that
// the properties exposed (i.e. courses) must be consistent with ICourseProps's properties (i.e. courses) 
function mapStateToProps(state: IAppState, ownProps: any): any{
    return {
        courses: state.courses
    };
}

// Return redux actions so that the UI can later trigger those actions. Make sure that the returned actions are
// matching the properties for the component (i.e. actions)
function mapDispatchToProps(dispatch: any): any{
    return {
        // https://stackoverflow.com/questions/42888184/how-to-resolve-typescript-redux-connect-error-actioncreatorsmapobject
        actions: bindActionCreators<any>(courseActions, dispatch)
    };
}

// Wire redux via connect() so that CoursePage can treat redux states as regular React properties
export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);