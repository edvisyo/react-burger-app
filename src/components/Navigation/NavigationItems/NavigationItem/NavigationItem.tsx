import React from "react";
import classes from './NavigationItem.css';

interface NavItem {
    children?: string;
    link?: string;
    active?: boolean;
}

const navigationItem = (props: NavItem ) => {
    return (
        <li className={classes.NavigationItem}>
            <a href={props.link} className={props.active ? classes.active : null}>{props.children}</a>
        </li>
    );
}

export default navigationItem;