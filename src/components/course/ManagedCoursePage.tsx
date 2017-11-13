import * as React from "react";
import { ICourse } from "../../models/course";
import { IAuthor, IAuthorFormatted } from "../../models/author";
import { IDeleteCourseAction, CourseActionTypes, CourseTypeKeys } from "../../actions/courseTypes";
import { connect } from "react-redux";
import { ReducersMapObject, bindActionCreators } from "redux";
import * as courseActions from "../../actions/courseActions";
import { IAppState } from "../../stores/configStore";
import CourseList from "./CourseList";
import CourseForm from "./CourseForm";
import * as toastr from "toastr";

export interface ICourseError {
    title?: string;
    authorId?: string;
    category?: string;
    length?: string;
}

export interface IManagedCourseProps {
    course: ICourse; // Redux properties. See mapStateToProps()
    authors: Array<IAuthorFormatted>; // Redux properties. See mapStateToProps()
    actions: typeof courseActions; // Redux actions. See mapStateToProps()
    history: Array<string>; // From router injection. Magic :-(
}

export interface IManagedCourseState {
    course: ICourse;
    errors: ICourseError;
    saving: boolean;
}


class ManagedCoursePage extends React.Component<IManagedCourseProps, IManagedCourseState> {
    constructor(props: IManagedCourseProps) {
        super(props);
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            saving: false
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    public updateCourseState(event: any): any {
        const field: string = event.target.name;
        const course: ICourse = this.state.course;
        const courseAny: any = course as any;
        courseAny[field] = event.target.value;
        return this.setState({ course: course });
    }

    public componentWillReceiveProps(nextProps: IManagedCourseProps): void {
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }

    public async saveCourse(event: Event): Promise<void> {
        event.preventDefault();
        this.setState({saving: true});
        try{
            await this.props.actions.saveCourse(this.state.course);
            this.setState({saving: false});
            toastr.success("Course saved!");
            this.props.history.push("/courses");
        }
        catch (e) {
            toastr.error(e);      
            this.setState({saving: false});
        }
    }

    public render(): JSX.Element {
        return (
            <div>
                <h1>Manage Course</h1>
                <CourseForm course={this.state.course}
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse}
                    errors={this.state.errors}
                    allAuthors={this.props.authors} 
                    saving={this.state.saving} />
            </div>
        );
    }
}

function getCourseById(courses: Array<ICourse>, id: string): ICourse {
    const coursesFound: Array<ICourse> = courses.filter((course: ICourse) => course.id === id);
    if (coursesFound) {
        return coursesFound[0];
    }

    return null;
}

function mapStateToProps(state: IAppState, ownProps: any): any {
    let course: ICourse = {
        id: "",
        watchHref: "",
        title: "",
        authorId: "",
        length: "",
        category: ""
    };

    const courseId: string = ownProps.match.params.id;
    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }

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