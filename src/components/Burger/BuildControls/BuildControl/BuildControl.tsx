import React, { Component } from "react";
import classes from './BuildControl.css';
import { BuildControlInterface } from "../../../../interfaces/BuildControlInterface";

class BuildControl extends Component<BuildControlInterface> {
    constructor(props: BuildControlInterface) {
        super(props);
    }
    render() {
        return (
            <div className={classes.BuildControl}>
                <div className={classes.Label}>{this.props.label}</div>
                {/* <button className={classes.Less} onClick={this.props.removed} disabled={this.props.disabled}>Less</button> */}
                <button className={classes.Less} onClick={this.props.removed} >Less</button>
                <button className={classes.More} onClick={this.props.added} >More</button>
            </div>
        );
    }
}

export default BuildControl;