import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import { Props } from '../../interfaces/Props';
import { BurgerBuilderInterface } from '../../interfaces/BurgerBuilderInterface';
import { IngredientsObjectKeys } from "../../interfaces/IngredientsObjectKeys";

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
            totalPrice: 4
        }
    }

    addIngredientHandler = (type: number): void => {

        const oldCount:number = this.state.ingredients[type];
        const updatedCount:number = oldCount + 1;
        const updatedIngredients: IngredientsObjectKeys = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice:number = this.state.totalPrice !== undefined ? this.state.totalPrice : 0;
        const newPrice:number = oldPrice + priceAddition;

        console.log(newPrice.toFixed(2))
        
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});

    }      

    // removeIngredientHandler = (type: string) => {
    // }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;