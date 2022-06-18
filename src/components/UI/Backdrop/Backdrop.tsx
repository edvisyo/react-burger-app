import React, { Component } from "react";
import classes from './Backdrop.css';
import { BackdropInterface } from "../../../interfaces/BackdropInterface";

const backdrop = (props:BackdropInterface) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;