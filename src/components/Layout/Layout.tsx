import React from "react";
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import { ChildrenInterface } from "../../interfaces/ChildrenInterface";
 
const layout = (props:ChildrenInterface) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;