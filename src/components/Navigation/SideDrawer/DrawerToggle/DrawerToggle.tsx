import React from "react";
import classes from './DrawerToggle.css';
import { BackdropInterface } from "../../../../interfaces/BackdropInterface";

const drawerToggle = (props: BackdropInterface) => {
    return(
        <div className={classes.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default drawerToggle;