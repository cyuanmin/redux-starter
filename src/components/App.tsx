import * as React from "react";
import { BrowserRouter as Router} from 'react-router-dom';
import { PrimaryLayout } from "./PrimaryLayout";

export const App: () => JSX.Element = (): JSX.Element =>
    (
        <Router>
            <PrimaryLayout/>
        </Router>
    );