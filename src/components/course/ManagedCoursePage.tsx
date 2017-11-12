import * as React from "react";
import { ICourse } from "../../models/course";
import { IDeleteCourseAction, ActionTypes, TypeKeys } from "../../actions/courseTypes";
import { connect } from "react-redux";
import { ReducersMapObject, bindActionCreators } from "redux";
import * as courseActions from "../../actions/courseActions";
import { IAppState } from "../../stores/configStore";
import CourseList from "./CourseList";
import CourseForm from "./CourseForm";

export interface ICourseError {
    title: string;
    authorId: string;
    category: string;
    length: string;
}

export interface IManagedCourseProps {
    name: string;
    course: ICourse; // Redux properties. See mapStateToProps()
    errors: ICourseError;
}

export interface IManagedCourseState {
    course: ICourse;
    errors: ICourseError;
}


class ManagedCoursePage extends React.Component<IManagedCourseProps, IManagedCourseState> {
    constructor(props: IManagedCourseProps) {
        super(props);
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: Object.assign({}, this.props.errors)
        };
    }

    public render(): JSX.Element {
        return (
            <div>
                <h1>Manage Course</h1>
                <CourseForm course={this.state.course} errors={this.state.errors} allAuthors={[]}/>
            </div>
        );
    }
}

function mapStateToProps(state: IAppState, ownProps: IManagedCourseProps): any {
    const course: ICourse = {
        id: "",
        watchHref: "",
        title: "",
        authorId: "",
        length: "",
        category: ""
    };

    const errors: ICourseError =
        {
            title: "",
            authorId: "",
            category: "",
            length: ""
        };

    return {
        course: course,
        errors: errors
    };
}

function mapDispatchToProps(dispatch: any): any {
    return {
        // https://stackoverflow.com/questions/42888184/how-to-resolve-typescript-redux-connect-error-actioncreatorsmapobject
        actions: bindActionCreators<any>(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagedCoursePage);