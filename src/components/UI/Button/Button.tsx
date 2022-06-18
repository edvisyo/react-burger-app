import React from "react";
import classes from './Button.css'

interface Button {
    btnType: string;
    clicked(): boolean;
    children: boolean;
}

const button = (props:Button) => (
    <button className={[classes.Button, classes[props.btnType]].join(' ')} onClick={props.clicked}>{props.children}</button>
);

export default button;