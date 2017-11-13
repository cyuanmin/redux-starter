import { Link, NavLink } from "react-router-dom";
import * as React from "react";
import LoadingDots from "../../common/LoadingDots";

export const Header: () => JSX.Element = (): JSX.Element =>
    (
        <header className="jumbotron">
            <nav>
                <NavLink to='/' activeClassName="active">Home</NavLink>
                {" | "}
                <NavLink to='/about' activeClassName="active">About</NavLink>
                {" | "}
                <NavLink to='/courses' activeClassName="active">Courses</NavLink>
                <LoadingDots interval={100} dots={20}/>
            </nav>
        </header>
    );