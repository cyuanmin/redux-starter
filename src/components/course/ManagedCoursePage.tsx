import * as React from "react";
import { ICourse } from "../../models/course";
import { IAuthor, IAuthorFormatted } from "../../models/author";
import { IDeleteCourseAction, CourseActionTypes, CourseTypeKeys } from "../../actions/courseTypes";
import { connect } from "react-redux";
import { ReducersMapObject, bindActionCreators } from "redux";
import * as courseActions from "../../actions/courseActions";
import { IAppState } from "../../stores/configStore";
import CourseList from "./CourseList";
import {CourseForm} from "./CourseForm";
import * as toastr from "toastr";

// The definition of error. By default, all fields can be empty (null)
export interface ICourseError {
    title?: string;
    authorId?: string;
    category?: string;
    length?: string;
}

// The input properties for ManagedCoursePage.
export interface IManagedCourseProps {
    course: ICourse; // Redux properties. See mapStateToProps(). It represents the active course
    authors: Array<IAuthorFormatted>; // Redux properties. See mapStateToProps(). It is the list of all authors
    actions: typeof courseActions; // Redux actions. See mapStateToProps()
    history: Array<string>; // From router injection (magic!). This is VERY important to enable navigation
}

export interface IManagedCourseState {
    course: ICourse; // If the course props (above) is empty, we should still be able to create a new course
    errors: ICourseError; // Keep track of local errors. This is a temporary state that doesn't need to be stored in global state
    saving: boolean; // Manage whether ajax is in progress or not
}

// A component to manage an existing course or a new course
export class ManagedCoursePage extends React.Component<IManagedCourseProps, IManagedCourseState> {
    constructor(props: IManagedCourseProps) {
        super(props);

        // Initialize the state by making a copy of the course passed in (could be null)
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            saving: false
        };

        // In ES6, we have to explicitly bind member functions :-(
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    // Update a field in the course. It can be any field. TextInput or SelectInput knows how to pass the field info
    public updateCourseState(event: any): any {
        const field: string = event.target.name;
        const course: ICourse = this.state.course;
        const courseAny: any = course as any;
        courseAny[field] = event.target.value;
        return this.setState({ course: course }); // Update the course so that we are ready for saving it later
    }

    // If a course is changed, we would want to update the course state. Facebook says,
    // Use componentWillReceiveProps as an opportunity to react to a prop transition before render() 
    // is called by updating the state using this.setState(). The old props can be 
    // accessed via this.props. Calling this.setState() within this function will 
    //not trigger an additional render.
    public componentWillReceiveProps(nextProps: IManagedCourseProps): void {
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }

    // Validate course, and write to errors state when necessary so that 
    // UI can display errors properly
    public courseFormIsValid(): boolean {
        let formIsValid: boolean = true;
        const errors: ICourseError = {};

        // A artificial rule to trigger error
        if (this.state.course.title.length < 5) {
            errors.title = "Title must be at least 5 characters";
            this.setState({errors: errors});
            formIsValid = false;
        }
        return formIsValid;
    }

    // An async function to save course, meaning that this function
    // might take a while to complete
    public async saveCourse(event: Event): Promise<void> {
        // Once we receive the event, the event will not be processed by other parties
        event.preventDefault();

        // Return if errors have been detected
        if (!this.courseFormIsValid()) {
            return;
        }

        // Start the saving process by setting saving flag to be true
        this.setState({saving: true});
        try{
            // Make redux-thunk call to save a course. This function returns a promise
            await this.props.actions.saveCourse(this.state.course);
            this.setState({saving: false}); // Done! We will flip the saving flag to false
            toastr.success("Course saved!"); // Pop up a success message!
            this.props.history.push("/courses"); // Redirect to main page
        }
        catch (e) {
            toastr.error(e);   // Pop up an error message   
            this.setState({saving: false}); // We are done with saving
        }
    }

    // Render CourseForm component
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
// Retrieve a course based on ID
function getCourseById(courses: Array<ICourse>, id: string): ICourse {
    const coursesFound: Array<ICourse> = courses.filter((course: ICourse) => course.id === id);
    if (coursesFound) {
        return coursesFound[0];
    }

    return null;
}

// Redux helper to convert redux states (i.e. IAppState) to Component properties
function mapStateToProps(state: IAppState, ownProps: any): any {
    let course: ICourse = {
        id: "",
        watchHref: "",
        title: "",
        authorId: "",
        length: "",
        category: ""
    };

    // Access query string to grab course ID
    const courseId: string = ownProps.match.params.id;
    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }

    // Convert author into a combo-box friendly object
    const authorsFormattedForDropdown: Array<IAuthorFormatted> = state.authors.map((author: IAuthor) => {
        return {
            value: author.id,
            text: author.firstName + " " + author.lastName
        };
    });

    // Make sure that the returned properties (course & authors) are matching the properties for the component 
    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}

// Return redux actions so that the UI can later trigger those actions. Make sure that the returned actions are
// matching the properties for the component (i.e. actions)
function mapDispatchToProps(dispatch: any): any {
    return {
        // https://stackoverflow.com/questions/42888184/how-to-resolve-typescript-redux-connect-error-actioncreatorsmapobject
        actions: bindActionCreators<any>(courseActions, dispatch)
    };
}

// Wire redux via connect() so that ManagedCoursePage can treat redux states as regular React properties
export default connect(mapStateToProps, mapDispatchToProps)(ManagedCoursePage);