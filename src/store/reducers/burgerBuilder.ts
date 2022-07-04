import { IngredientsObjectKeys } from "../../interfaces/IngredientsObjectKeys";
// import * as actionTypes from "./actions";
import { ActionType } from "../actions/actionTypes"

type actionType = {
    [key: string]: string
}

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4
}

const INGREDIENT_PRICES: IngredientsObjectKeys = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const reducer = (state = initialState, action: actionType) => {
    switch(action.type) {
        case ActionType.ADD_INGREDIENT: 
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName as keyof typeof state.ingredients] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case ActionType.REMOVE_INGREDIENT: 
        return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName as keyof typeof state.ingredients] - 1
            },
            totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
        };  
        default:
            return state;     
    }
}

export default reducer;