import React, { Component } from "react";
import { ModalInterface } from '../../../interfaces/ModalInterface';
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";
import classes from './Modal.css';

class Modal extends Component<ModalInterface> {
    constructor(props: ModalInterface) {
        super(props);
    }

    shouldComponentUpdate(nextProps: ModalInterface): boolean {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentDidUpdate(): void {
        console.log('[Modal] Will Update!');
    }

    render() {
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClose} />
                <div className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;