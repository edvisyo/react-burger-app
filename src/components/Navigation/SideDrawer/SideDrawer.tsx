import React from "react";
import Logo from '../../Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './SideDrawer.css';
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";

interface sideDrawerInterface {
    open: boolean;
    closed(): void;
}

const sideDrawer = (props: sideDrawerInterface) => {

    let attechedClasses = [classes.SideDrawer, classes.Close];

    if(props.open) {
        attechedClasses = [classes.SideDrawer, classes.Open];
    }

    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attechedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;