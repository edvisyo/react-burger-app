import React, { Component } from 'react';
import classes from './BurgerIngredient.css';
import { BurgerIngredientInterface } from '../../../interfaces/BurgerIngredientInterface';
// import PropTypes from 'prop-types';
// npm install --save prop-types

class BurgerIngredient extends Component<BurgerIngredientInterface> {
    render() {
        let ingredient:JSX.Element = null!;

        switch(this.props.type) {
        // switch(props.type) {
            case('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>
            break;
            case('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
            break; 
            case('meat'):
                ingredient = <div className={classes.Meat}></div>   
            break; 
            case('cheese'):
                ingredient = <div className={classes.Cheese}></div>   
            break;
            case('salad'):
                ingredient = <div className={classes.Salad}></div>   
            break;
            case('bacon'):
                ingredient = <div className={classes.Bacon}></div>   
            break;
            default:
                ingredient = null!;
        }

    return ingredient;    
    
    }
}

// BurgerIngredient.propTypes = {
//     type: PropTypes.string.isRequired
// }

export default BurgerIngredient;