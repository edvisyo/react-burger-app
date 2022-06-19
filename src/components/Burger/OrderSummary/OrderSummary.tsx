import React from "react";
import Aux from "../../../hoc/Aux";
import { IngredientsObjectKeys } from '../../../interfaces/IngredientsObjectKeys';
import { OrderSummaryInterface } from "../../../interfaces/OrderSummaryInterface";
import Button from '../../UI/Button/Button';


const orderSummary = (props: OrderSummaryInterface) => {

    const ingredientSummary = Object.keys(props.ingredients).map(ingredientKey => {
        return (
        <li key={ingredientKey}>
            <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {props.ingredients[ingredientKey as any]}
        </li>
        );
    });

    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)} &euro;</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;