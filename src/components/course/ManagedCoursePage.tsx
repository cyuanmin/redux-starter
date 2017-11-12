import * as React from "react";
import { ICourse } from "../../models/course";
import { IAuthor, IAuthorFormatted} from "../../models/author";
import { IDeleteCourseAction, ActionTypes, TypeKeys } from "../../actions/courseTypes";
import { connect } from "react-redux";
import { ReducersMapObject, bindActionCreators } from "redux";
import * as courseActions from "../../actions/courseActions";
import { IAppState } from "../../stores/configStore";
import CourseList from "./CourseList";
import CourseForm from "./CourseForm";

export interface ICourseError {
    title?: string;
    authorId?: string;
    category?: string;
    length?: string;
}

export interface IManagedCourseProps {
    name: string;
    course: ICourse; // Redux properties. See mapStateToProps()
    authors: Array<IAuthorFormatted>; // Redux properties. See mapStateToProps()
    actions: typeof courseActions; // Redux actions. See mapStateToProps()
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
            errors: {}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    public updateCourseState(event: any): any {
        const field: string = event.target.name;
        const course: ICourse = this.state.course;
        const courseAny: any = course as any;
        courseAny[field] = event.target.value;
        return this.setState({course: course});
    }

    public saveCourse(event: Event): any {
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
    }

    public render(): JSX.Element {
        return (
            <div>
                <h1>Manage Course</h1>
                <CourseForm course={this.state.course} 
                onChange={this.updateCourseState} 
                onSave={this.saveCourse}
                errors={this.state.errors} 
                allAuthors={this.props.authors} />
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

    const authorsFormattedForDropdown: Array<IAuthorFormatted> = state.authors.map((author: IAuthor) => {
        return {
            value: author.id,
            text: author.firstName + " " + author.lastName
        };
    });

    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch: any): any {
    return {
        // https://stackoverflow.com/questions/42888184/how-to-resolve-typescript-redux-connect-error-actioncreatorsmapobject
        actions: bindActionCreators<any>(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagedCoursePage);