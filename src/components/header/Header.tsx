import { Link, NavLink } from "react-router-dom";
import * as React from "react";

export const Header: () => JSX.Element = (): JSX.Element =>
    (
        <header className="jumbotron">
            <nav>
                <NavLink to='/' activeClassName="active">Home</NavLink>
                {" | "}
                <NavLink to='/about' activeClassName="active">About</NavLink>
            </nav>
        </header>
    );