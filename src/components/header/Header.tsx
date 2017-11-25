import { Link, NavLink } from "react-router-dom";
import * as React from "react";
import LoadingDots from "../../common/LoadingDots";

// The loading property can be passed from parent component (e.g. PrimaryLayout) to
// influence the look and feel of the header
export interface IHeaderProp {
    loading: boolean;
}

// The header component is a function-style component (vs. a class-style component). There
// is no state stored. It will show loading dots when the loading property is true.
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