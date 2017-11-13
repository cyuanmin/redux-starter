import { Link, NavLink } from "react-router-dom";
import * as React from "react";
import LoadingDots from "../../common/LoadingDots";

export interface IHeaderProp {
    loading: boolean;
}

export const Header: (props: IHeaderProp) => JSX.Element = (props: IHeaderProp): JSX.Element =>
    (
        <header className="jumbotron">
            <nav>
                <NavLink to='/' activeClassName="active">Home</NavLink>
                {" | "}
                <NavLink to='/about' activeClassName="active">About</NavLink>
                {" | "}
                <NavLink to='/courses' activeClassName="active">Courses</NavLink>
                {props.loading === true && <LoadingDots interval={100} dots={20} />}
            </nav>
        </header>
    );