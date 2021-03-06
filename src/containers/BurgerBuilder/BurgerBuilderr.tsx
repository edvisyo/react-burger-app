import React, { Component, useEffect, useState } from "react";
// import Aux from '../../hoc/Aux/Aux';
// import Burger from "../../components/Burger/Burger";
// import BuildControls from "../../components/Burger/BuildControls/BuildControls";
// import { BurgerBuilderInterface } from '../../interfaces/BurgerBuilderInterface';
// import { IngredientsObjectKeys } from "../../interfaces/IngredientsObjectKeys";
// import Modal from "../../components/UI/Modal/Modal";
// import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
// import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
// import axios from "../../axios-orders";
// import Spinner from '../../components/UI/Spinner/Spinner';
// // import { AxiosResponse } from "axios";
// import { useNavigate } from "react-router-dom";


// const BurgerBuilderr = (props: BurgerBuilderInterface) => {
// // const burgerBuilderr: React.FunctionComponent<BurgerBuilderInterface> = ({ingredients, totalPrice, price, purchaseable, purchasing, loading, errorMessage}) => {  
//     const INGREDIENT_PRICES: IngredientsObjectKeys = {
//         salad: 0.5,
//         cheese: 0.4,
//         meat: 1.3,
//         bacon: 0.7
//     }

//     let [purchasing, setPurchasing] = useState(false);
//     let [ingredients, setIngredients] = useState({});
//     let [loading, setLoading] = useState(false);
//     let [totalPrice, setNewTotal] = useState(4);
//     let [purchaseable, setPurchaseStatus] = useState(false);
//     let [errorMessage, setErrorMessage] = useState('');
//     const navigate = useNavigate();

//     const getIngredients = async () => {
//         const response = await axios.get('/ingredients.json');
//         setIngredients(response.data);
//     }

//     useEffect(() => {
//         getIngredients();
//     }, []);
    
//     const updatePurchaseState = (ingredients: IngredientsObjectKeys) => {
//         //Get values from ingredients object (like 0->1, 0->2 etc...)
//         const sum = Object.keys(ingredients).map(ingredientKey => {
//             return ingredients[ingredientKey];
//         }).reduce((sum, el) => {
//             return sum + el;
//         }, 0);
//         if(sum > 0) {
//             setPurchaseStatus(true);
//         } else {
//             setPurchaseStatus(false);
//         }
//     }

//     const addIngredientHandler = (type: string): void => {

//         const oldCount = ingredients[type as keyof typeof ingredients];
//         const updatedCount:number = oldCount + 1;
//         const updatedIngredients: IngredientsObjectKeys = {
//             ...ingredients
//         }
//         updatedIngredients[type] = updatedCount;
//         const priceAddition = INGREDIENT_PRICES[type];
//         const oldPrice:number = totalPrice !== undefined ? totalPrice : 0;
//         const newPrice:number = oldPrice + priceAddition;
        
//         setNewTotal(totalPrice = newPrice);
//         setIngredients(ingredients = updatedIngredients);
//         updatePurchaseState(updatedIngredients);
//     }

//     const removeIngredientHandler = (type: string): void => {
        
//         const oldCount:number = ingredients[type as keyof typeof ingredients];
//         if(oldCount <= 0) {
//             return
//         }
//         const updatedCount:number = oldCount - 1;
//         const updatedIngredients: IngredientsObjectKeys = {
//             ...ingredients
//         }
//         updatedIngredients[type] = updatedCount;
//         const priceDeduction = INGREDIENT_PRICES[type];
//         const oldPrice:number = totalPrice !== undefined ? totalPrice : 0;
//         const newPrice:number = oldPrice - priceDeduction;
        
//         setNewTotal(totalPrice = newPrice);
//         setIngredients(ingredients = updatedIngredients);
//         updatePurchaseState(updatedIngredients);
//     }

//     // const disableButton = () => {
//     //     const disabledInfo = {
//     //         ...ingredients
//     //     };

//     //     for( let key in disabledInfo) {
//     //         disabledInfo[key] = disabledInfo[key] = 0;
//     //         return disabledInfo[key];
//     //     };
//     // }

//     const purchaseHandler = () => {
//         setPurchasing(true);
//     }

//     const purchaseCancelHandler = () => {
//         setPurchasing(false);
//     }

//     const loadBurgerAndControls = () => {
//         if(!ingredients) {
//             return errorMessage ? setErrorMessage(`Ingredients can't be loaded!`) : <Spinner />
//         } else {
//             return( 
//                 <Aux>
//                     <Burger ingredients={ingredients}/>
//                     <BuildControls 
//                         ingredientAdded={addIngredientHandler} 
//                         ingredientRemoved={removeIngredientHandler}
//                         // disabledButton={disableButton()} 
//                         price={totalPrice}
//                         purchaseable={purchaseable}
//                         makeOrder={purchaseHandler} />
//                 </Aux>
//             );    
//         }
//     }
    
//     const makeOrder = () => {
//         if(!ingredients || loading) {
//             return <Spinner />
//         } else {
//             return <OrderSummary ingredients={ingredients}
//             purchaseCancelled={purchaseCancelHandler}
//             purchaseContinued={purchaseContinueHandler}
//             price={totalPrice} />
//         }
//     }

//     const purchaseContinueHandler = () => {
//         const queryParams = [];
//         for(let i in ingredients) {
//             queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(ingredients[i as keyof typeof ingredients]));
//         }
//         queryParams.push('price=' + totalPrice)
//         const queryString = queryParams.join('&');
//         navigate({
//             pathname: '/checkout',
//             search: '?' + queryString
//         });
//     }

//     return(
//         <Aux>
//             <Modal show={purchasing} modalClose={purchaseCancelHandler}>
//                 {makeOrder()}              
//             </Modal>
//             {loadBurgerAndControls()}
//         </Aux>
//     );
// }

// export default withErrorHandler(BurgerBuilderr, axios);