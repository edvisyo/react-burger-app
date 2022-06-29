import React, { Component, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { IngredientsObjectKeys } from "../../interfaces/IngredientsObjectKeys";
import { Routes, Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";


const Checkout = () => {

    let [ingredient, setIngredients] = useState({});
    const [totalPrice, setPrice] = useState(0)

    const ingredients: IngredientsObjectKeys = {};

    const location = useLocation();

    const getURLIngredients = () => {
        const query = new URLSearchParams(location.search);
        let price = 0;
        for(let params of query.entries()) {
            if(params[0] === 'price') {
                price = params[1];
            } else {
                ingredients[params[0]] = +params[1]; 
            }
        }
        setIngredients(ingredient = ingredients);
        setPrice(price);
    }
    console.log(ingredient);

    useEffect(() => {
        getURLIngredients();
    }, []);

    const navigate = useNavigate();

    const checkoutCancelHandler = () => {
        navigate('/');
    }

    const checkoutContinueHandler = () => {
        navigate('/checkout/contact-data');
    }

    return(
        <div>
            <CheckoutSummary 
                    ingredients={ingredients}
                    cancelCheckout={checkoutCancelHandler}
                    continueCheckout={checkoutContinueHandler} />
            <Routes>
                <Route path={'/contact-data'} element={<ContactData ingredients={ingredient} price={totalPrice} />}/> 
            </Routes>       
        </div>
    );
}

export default Checkout;