import React, { Component } from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { BurgerBuilderInterface } from '../../interfaces/BurgerBuilderInterface';

class Burger extends Component<BurgerBuilderInterface> {

    constructor(props: BurgerBuilderInterface) {
        super(props);
    }
    
    // Converting ingredients object into array
    convertIngredients() {
        let transformedIngredients = Object.keys(this.props.ingredients).map(ingredientKey => {
            return [...Array(this.props.ingredients[ingredientKey])].map((_, index) => {
                return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);

        if(transformedIngredients.length === 0) {
            const message = <p>Please start adding an Ingredients!</p>
            return message;
        }

        return transformedIngredients;
        
    }
    
    render() {
        return(
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top" />
                {/* <BurgerIngredient type="cheese" />
                <BurgerIngredient type="meat" /> */}
                {this.convertIngredients()}
                <BurgerIngredient type="bread-bottom" />
            </div>
        );
    }
}

export default Burger;