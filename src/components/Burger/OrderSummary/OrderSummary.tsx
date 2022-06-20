import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import { IngredientsObjectKeys } from '../../../interfaces/IngredientsObjectKeys';
import { OrderSummaryInterface } from "../../../interfaces/OrderSummaryInterface";
import Button from '../../UI/Button/Button';

//This component also could be a functional component..
class OrderSummary extends Component<OrderSummaryInterface> {
    constructor(props: OrderSummaryInterface) {
        super(props);
    }
    // componentDidUpdate(): void {
    //     console.log('[OrderSummary] Will Update!');
    // }
    
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(ingredientKey => {
            return (
            <li key={ingredientKey}>
                <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {this.props.ingredients[ingredientKey as any]}
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
                <p><strong>Total price: {this.props.price.toFixed(2)} &euro;</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;