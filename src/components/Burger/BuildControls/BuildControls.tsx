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
                <p>Current price is: <strong>{this.props.price?.toFixed(2)}</strong> &euro;</p>
                { controls.map(ctrl => (
                    <BuildControl 
                        key={ ctrl.label } 
                        label={ ctrl.label }  
                        added={() => this.props.ingredientAdded!(ctrl.type)}
                        removed={() => this.props.ingredientRemoved!(ctrl.type)}
                        disabledButton={() => this.props.disabled!(ctrl.type)} />
                )) }
                <button 
                    className={classes.OrderButton}
                    disabled={!this.props.purchaseable}
                    onClick={this.props.makeOrder}>ORDER NOW</button>
            </div>
        );
    }
}

export default BuildControls;