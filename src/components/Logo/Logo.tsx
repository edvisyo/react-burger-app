import React from "react";
import burgerLogo from '../../assets/images/pngwing.com.png';
import classes from './Logo.css';

const logo = () => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="burger-king-logo" />
    </div>
);

export default logo;