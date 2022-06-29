import React from "react";
import { IngredientsObjectKeys } from "../../interfaces/IngredientsObjectKeys";
import classes from "./Order.css";

interface OrdersInterface {
    ingredients: IngredientsObjectKeys;
    price: string
}

const order = (props: OrdersInterface) => {

    const ingredients = [];

    for(let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = ingredients.map((ingredient, index) => {
        return <span 
                    style={{textTransform: 'capitalize', display: 'inline-block', margin: '0 8px', border: '1px solid #cccccc', padding: '5px'}}
                    key={index}>
                        {ingredient.name} ({ingredient.amount})
                </span>;
    });

    return(
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>{Number.parseFloat(props.price).toFixed(2)} &euro;</strong></p>
        </div>
    );
}

export default order;