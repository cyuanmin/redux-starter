import { Route, Switch } from 'react-router-dom';
import * as React from "react";
import {HomePage} from "../components/home/HomePage";
import {AboutPage} from "../components/about/AboutPage";
import {CoursePage} from "../components/course/CoursePage";
import {Header} from "../components/header/Header";

export const PrimaryLayout: () => JSX.Element = (): JSX.Element => (
    <div className="container">
        <Header/>
        <main>        
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/course" component={CoursePage} />
        </main>
    </div>
);