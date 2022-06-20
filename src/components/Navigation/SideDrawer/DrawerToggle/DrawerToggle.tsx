import React from "react";
import classes from './DrawerToggle.css';

const drawerToggle = (props: any) => {
    return(
        <div className={classes.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default drawerToggle;