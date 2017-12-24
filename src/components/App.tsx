import * as React from "react";
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from "./Routes";
//import HomeLayout from "../components/layout/HomeLayout";

// Wrap Router component around our layout component so that 
// the website can do proper routing
export const App: () => JSX.Element = (): JSX.Element =>
    (
        <Router>
            <Routes/>
        </Router>
    );