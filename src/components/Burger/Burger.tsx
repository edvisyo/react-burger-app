import React, { Component } from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

class Burger extends Component {
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