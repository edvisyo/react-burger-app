import React from "react";
import classes from './Button.css';

interface Button {
    btnType: string;
    clicked?(): void;
    children?: string;
    disabled: boolean;
}

const button = (props:Button) => (
    <button className={[classes.Button, classes[props.btnType]].join(' ')} onClick={props.clicked} disabled={props.disabled}>{props.children}</button>
);

export default button;