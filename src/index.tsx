import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router} from 'react-router-dom';
import { App } from "./components/App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import {configureStore, IAppState} from "./stores/configStore";
import {Provider, Store} from "react-redux";
import {ICourse} from "./actions/courseTypes";
import {loadCourse} from "./actions/courseActions";

const defaultCoruses: Array<ICourse> = [];
const store: Store<IAppState> = configureStore({courses: defaultCoruses});
store.dispatch(loadCourse());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("example")
);