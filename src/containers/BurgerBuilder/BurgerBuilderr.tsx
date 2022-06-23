import React, { Component, useEffect, useState } from "react";
// import Aux from '../../hoc/Aux/Aux';
// import Burger from "../../components/Burger/Burger";
// import BuildControls from "../../components/Burger/BuildControls/BuildControls";
// import { Props } from '../../interfaces/Props';
// import { BurgerBuilderInterface } from '../../interfaces/BurgerBuilderInterface';
// import { IngredientsObjectKeys } from "../../interfaces/IngredientsObjectKeys";
// import Modal from "../../components/UI/Modal/Modal";
// import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
// import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
// import axios from "../../axios-orders";
// import Spinner from '../../components/UI/Spinner/Spinner';
// import { AxiosResponse } from "axios";
// import { useNavigate } from "react-router-dom";


// // const burgerBuilderr = (props: BurgerBuilderInterface) => {
// const burgerBuilderr: React.FunctionComponent<BurgerBuilderInterface> = ({ingredients, totalPrice, price, purchaseable, purchasing, loading, errorMessage}) => {  

//     const INGREDIENT_PRICES: IngredientsObjectKeys = {
//         salad: 0.5,
//         cheese: 0.4,
//         meat: 1.3,
//         bacon: 0.7
//     }

//     const state = {
//         ingredients: null!,
//         totalPrice: 4,
//         purchaseable: false,
//         purchasing: false,
//         loading: false,
//         errorMessage: false
//     }
//     // const [ingredients] = useState();

//     useEffect(() => {
//         axios.get('/ingredients.json').then((response: AxiosResponse) => {
//             useState({ingredients: response.data});
//         }).catch(error => {
//             useState({errorMessage: true});
//         })
//     })

//     function updatePurchaseState(ingredients: IngredientsObjectKeys): void {
//         //Get values from ingredients object (like 0->1, 0->2 etc...)
//         const sum = Object.keys(ingredients).map(ingredientKey => {
//             return ingredients[ingredientKey];
//         }).reduce((sum, el) => {
//             return sum + el;
//         }, 0);
//         useState({purchaseable: sum > 0});
//     }
    
//     function addIngredientHandler(type: string) {

//         const oldCount:number = state.ingredients[type];
//         const updatedCount:number = oldCount + 1;
//         const updatedIngredients: IngredientsObjectKeys = {
//             ...state.ingredients
//         }
//         updatedIngredients[type] = updatedCount;
//         const priceAddition = INGREDIENT_PRICES[type];
//         const oldPrice:number = state.totalPrice !== undefined ? state.totalPrice : 0;
//         const newPrice:number = oldPrice + priceAddition;
        
//         useState({totalPrice: newPrice, ingredients: updatedIngredients});
//         updatePurchaseState(updatedIngredients);

//     }
    
//     function removeIngredientHandler(type: string) {
//         const oldCount:number = state.ingredients[type];
//         if(oldCount <= 0) {
//             return
//         }
//         const updatedCount:number = oldCount - 1;
//         const updatedIngredients: IngredientsObjectKeys = {
//             ...state.ingredients
//         }
//         updatedIngredients[type] = updatedCount;
//         const priceDeduction = INGREDIENT_PRICES[type];
//         const oldPrice:number = state.totalPrice !== undefined ? state.totalPrice : 0;
//         const newPrice:number = oldPrice - priceDeduction;
        
//         useState({totalPrice: newPrice, ingredients: updatedIngredients});
//         updatePurchaseState(updatedIngredients);
//     }

//     function disableButton() {
//         const disabledInfo = {
//             ...state.ingredients
//         };

//         for( let key in disabledInfo) {
//             disabledInfo[key] = disabledInfo[key] = 0;
//             return disabledInfo[key];
//         };
//     }
    
//     function purchaseHandler() {
//         useState({purchasing: true})
//     }

//     function purchaseCancelHandler() {
//         useState({purchasing: false});
//     }

//     function loadBurgerAndControls() {
//         if(!state.ingredients) {
//             return state.errorMessage ? <p>Ingredients can't be loaded!</p> : <Spinner />
//         } else {
//             return( 
//                 <Aux>
//                     <Burger ingredients={state.ingredients}/>
//                     <BuildControls 
//                         ingredientAdded={addIngredientHandler} 
//                         ingredientRemoved={removeIngredientHandler}
//                         disabledButton={disableButton()} 
//                         price={state.totalPrice}
//                         purchaseable={state.purchaseable}
//                         makeOrder={purchaseHandler} />
//                 </Aux>
//             );    
//         }
//     }
    
//     function makeOrder() {
//         if(!state.ingredients || state.loading) {
//             return <Spinner />
//         } else {
//             return <OrderSummary ingredients={state.ingredients}
//             purchaseCancelled={purchaseCancelHandler}
//             purchaseContinued={purchaseContinueHandler}
//             price={state.totalPrice!} />
//         }
//     }

//     function purchaseContinueHandler() {

//     }

//     return(
//         <Aux>
//             <Modal show={state.purchasing} modalClose={purchaseCancelHandler}>
//                     {makeOrder()}              
//                 </Modal>
//                     {loadBurgerAndControls()}
//         </Aux>
//     );

// }

// export default burgerBuilderr;