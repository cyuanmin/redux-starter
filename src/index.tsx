import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router} from 'react-router-dom';
import { App } from "./components/App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import {configureStore} from "./stores/configStore";
import {Provider} from "react-redux";

const store = configureStore(null);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("example")
);