import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import { ChildrenInterface } from "../../interfaces/ChildrenInterface";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component<ChildrenInterface> {
    constructor(props: ChildrenInterface) {
        super(props);
    }

    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;