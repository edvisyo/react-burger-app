import React from "react";
import classes from './NavigationItem.css';
import { NavLink } from "react-router-dom";

interface NavItem {
    children?: string;
    link?: string;
    active?: boolean;
    exact?: string;
}

const navigationItem = (props: NavItem ) => {
    return (
        <li className={classes.NavigationItem}>
            {/* <NavLink to={props.link} className={props.active ? classes.active : null}>{props.children}</NavLink> */}
            <NavLink to={props.link}
                     exact={props.exact}
                     activeClassName={classes.active}>{props.children}</NavLink>
                    {/* className={props.active ? classes.active : null}>{props.children}</NavLink> */}
        </li>
    );
}

export default navigationItem;