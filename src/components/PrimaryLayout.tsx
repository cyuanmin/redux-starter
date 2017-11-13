import { Route, Switch, withRouter} from 'react-router-dom';
import * as React from "react";
import HomePage from "../components/home/HomePage";
import AboutPage from "../components/about/AboutPage";
import CoursePage from "../components/course/CoursePage";
import ManagedCoursePage from "../components/course/ManagedCoursePage";
import {Header} from "../components/header/Header";
import {connect} from "react-redux";
import {IAppState} from "../stores/configStore";

export interface IPrimaryLayoutProps {
    loading: boolean; // Redux property. See mapStateToProps()
}

const PrimaryLayout: (props: IPrimaryLayoutProps) => JSX.Element = (props: IPrimaryLayoutProps): JSX.Element => (
    <div className="container">
        <Header loading={props.loading}/>
        <main>        
            <Route path="/" exact component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/courses" exact component={CoursePage}/>
            <Route path="/course/:id?" component={ManagedCoursePage}/>
        </main>
    </div>
);

function mapStateToProps(state: IAppState, ownProps: any): any{
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
// We must use withRouter so that location is injected as a property to the PrimaryLayout object, allowing it to 
// detect changes in location and re-render the child view
export default withRouter(connect(mapStateToProps, null, null)(PrimaryLayout));