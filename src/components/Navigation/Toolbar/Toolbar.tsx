import React, { Component } from "react";
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems";

class Toolbar extends Component {
    render() {
        return(
            <header className={classes.Toolbar}>
                <div>MENU</div>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </header>
        );
    }
}

export default Toolbar;