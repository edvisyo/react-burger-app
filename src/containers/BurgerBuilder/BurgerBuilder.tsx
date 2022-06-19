import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import { Props } from '../../interfaces/Props';
import { BurgerBuilderInterface } from '../../interfaces/BurgerBuilderInterface';
import { IngredientsObjectKeys } from "../../interfaces/IngredientsObjectKeys";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES: IngredientsObjectKeys = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}


class BurgerBuilder extends Component<Props, BurgerBuilderInterface> {
    
    constructor(props: BurgerBuilderInterface) {
        super(props);
        
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0 
            },
            totalPrice: 4,
            purchaseable: false,
            purchasing: false
        }
    }

    updatePurchaseState(ingredients: any): void {
        //Get values from ingredients object (like 0->1, 0->2 etc...)
        const sum = Object.keys(ingredients).map(ingredientKey => {
            return ingredients[ingredientKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({purchaseable: sum > 0});
    }

    addIngredientHandler = (type: string): void => {

        const oldCount:number = this.state.ingredients[type];
        const updatedCount:number = oldCount + 1;
        const updatedIngredients: IngredientsObjectKeys = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice:number = this.state.totalPrice !== undefined ? this.state.totalPrice : 0;
        const newPrice:number = oldPrice + priceAddition;
        
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);

    }      

    removeIngredientHandler = (type: string) => {
        
        const oldCount:number = this.state.ingredients[type];
        if(oldCount <= 0) {
            return
        }
        const updatedCount:number = oldCount - 1;
        const updatedIngredients: IngredientsObjectKeys = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice:number = this.state.totalPrice !== undefined ? this.state.totalPrice : 0;
        const newPrice:number = oldPrice - priceDeduction;
        
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    disableButton() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for( let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
            return disabledInfo[key];
        };
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('You continue!');
    }

    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                                  purchaseCancelled={this.purchaseCancelHandler}
                                  purchaseContinued={this.purchaseContinueHandler}
                                  price={this.state.totalPrice!} />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={this.disableButton()} 
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    makeOrder={this.purchaseHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;