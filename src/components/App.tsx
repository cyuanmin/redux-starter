import * as React from "react";
import { BrowserRouter as Router} from 'react-router-dom';
import PrimaryLayout from "./PrimaryLayout";

// Wrap Router component around our layout component so that 
// the website can do proper routing
export const App: () => JSX.Element = (): JSX.Element =>
    (
        <Router>
            <PrimaryLayout/>
        </Router>
    );