import React, { Component } from "react";
import { BuildControlsInterface } from "../../../interfaces/BuildControlsInterface";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

class BuildControls extends Component<BuildControlsInterface> {
    constructor(props: BuildControlsInterface) {
        super(props);
    }

    render() {
        return (
            <div className={classes.BuildControls}>
                { controls.map((ctrl: any) => (
                    <BuildControl 
                        key={ ctrl.label } 
                        label={ ctrl.label }  
                        added={() => this.props.ingredientAdded(ctrl.type)}/> 
                )) }
            </div>
        );
    }
}

export default BuildControls;