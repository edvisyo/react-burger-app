import React, { Component } from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { BurgerBuilderInterface } from '../../interfaces/BurgerBuilderInterface';

class Burger extends Component<BurgerBuilderInterface > {
    render() {
        return(
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top" />
                <BurgerIngredient type="cheese" />
                <BurgerIngredient type="meat" />
                <BurgerIngredient type="bread-bottom" />
            </div>
        );
    }
}

export default Burger;