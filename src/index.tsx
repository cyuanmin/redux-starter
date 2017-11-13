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

const store: Store<IAppState> = configureStore({
    courses: defaultCourses, 
    authors: defaultAuthors, 
    ajaxCallsInProgress: defaultAjaxCalls});
store.dispatch(loadCourse());
store.dispatch(loadAuthors());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("example")
);