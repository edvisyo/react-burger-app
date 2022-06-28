import React, { Component } from "react";
import { IngredientsObjectKeys } from "../../../interfaces/IngredientsObjectKeys";
import Burger from '../../Burger/Burger';
import Button from "../../UI/Button/Button";
import classes from './CheckoutSummary.css';

interface CheckoutInterface {
    ingredients: IngredientsObjectKeys;
    cancelCheckout(): void;
    continueCheckout(): void;
}

const checkoutSummary = (props: CheckoutInterface) => {
    return(
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked={props.cancelCheckout}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continueCheckout}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;