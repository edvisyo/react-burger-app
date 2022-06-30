import React, { ChangeEvent, ChangeEventHandler } from "react";
import { ObjectKeys } from "../../../../interfaces/ObjectKeys";
import classes from "./Input.css";

interface InputInterface {
    elementType: string;
    elementConfig: string;
    value: string;
    label?: string;
    changed?(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>): void;
}

const input = (props: InputInterface) => {

    let inputElement = null;

    switch(props.elementType) {
        case('input'):
            inputElement = <input 
                className={classes.InputElement} 
                {...props.elementConfig as {}} 
                value={props.value}
                onChange={props.changed}
                />;
        break;    
        case('textarea'):
            inputElement = <textarea 
                className={classes.InputElement} 
                {...props.elementConfig as {}} 
                value={props.value}
                onChange={props.changed}
                />;  
        break;
        case('select'):
            inputElement = <select 
                className={classes.InputElement}  
                value={props.value}
                onChange={props.changed}
                >
                    {props.elementConfig.options.map((option: ObjectKeys, index: number) => (
                        <option key={index} value={option.value}>{option.displayValue}</option>
                    ))}
                </select>;
        break;
        default:
            inputElement = <input 
                className={classes.InputElement} 
                {...props.elementConfig as {}} 
                value={props.value}
                onChange={props.changed}
                />;       
    }

    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;
