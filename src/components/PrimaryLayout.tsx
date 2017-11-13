import { Route, Switch } from 'react-router-dom';
import * as React from "react";
import HomePage from "../components/home/HomePage";
import AboutPage from "../components/about/AboutPage";
import CoursePage from "../components/course/CoursePage";
import ManagedCoursePage from "../components/course/ManagedCoursePage";
import {Header} from "../components/header/Header";

export const PrimaryLayout: () => JSX.Element = (): JSX.Element => (
    <div className="container">
        <Header/>
        <main>        
            <Route path="/" exact component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/courses" exact component={CoursePage}/>
            <Route path="/course/:id?" component={ManagedCoursePage}/>
        </main>
    </div>
);