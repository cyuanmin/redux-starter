import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router} from 'react-router-dom';
import { App } from "./components/App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import {configureStore, IAppState} from "./stores/configStore";
import {Provider, Store} from "react-redux";
import {ICourse} from "./models/course";
import {IAuthor} from "./models/author";
import {loadCourse} from "./actions/courseActions";
import {loadAuthors} from "./actions/authorActions";
import {defaultCourses, 
    defaultAuthors, 
    defaultAjaxCalls} from "./stores/initialStates";

import "../node_modules/toastr/build/toastr.min.css";   

// Define redux store where all object states (e.g. course, author, etc)
// are maintained. When those states change, object properties will be 
// visible to React components via mapStateToProps function.
const store: Store<IAppState> = configureStore({
    courses: defaultCourses,  // In our example, default courses are empty. We will later call loadCourse() to populate initial entries
    authors: defaultAuthors, // In our example, default authors are empty. We will later call loadAuthors() to populate initial entries
    ajaxCallsInProgress: defaultAjaxCalls}); // By default, no ajax calls have been made
store.dispatch(loadCourse()); // Load courses by calling helper functions (i.e. redux-thunk functions)
store.dispatch(loadAuthors()); // Load authors by calling helper functions (i.e. redux-thunk functions)

// Provider is a high-level component that allows us to wire redux with regular react components. 
// All child components of "App" (e.g. ManagedCoursePage, CourseForm, etc) will gain access to the redux store.
// Making sure to pass store object to Provider.
// React will replace example div with our React component.
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("example")
);