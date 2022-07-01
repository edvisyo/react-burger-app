import React, { ChangeEvent } from "react";
import { ObjectKeys } from "../../../../interfaces/ObjectKeys";
import classes from "./Input.css";

interface InputInterface {
    elementType: string;
    elementConfig: {};
    value: string;
    label?: string;
    changed?(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>): void;
    invalid: boolean;
    shouldValidate: boolean;
    touched: boolean;
}

const input = (props: InputInterface) => {

    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if(props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch(props.elementType) {
        case('input'):
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig as {}} 
                value={props.value}
                onChange={props.changed}
                />;
        break;    
        case('textarea'):
            inputElement = <textarea 
                className={inputClasses.join(' ')} 
                {...props.elementConfig as {}} 
                value={props.value}
                onChange={props.changed}
                />;  
        break;
        case('select'):
            inputElement = <select 
                className={inputClasses.join(' ')}  
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
                className={inputClasses.join(' ')} 
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
