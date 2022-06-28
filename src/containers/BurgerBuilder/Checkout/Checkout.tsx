import React, { Component, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CheckoutSummary from '../../../components/Order/CheckoutSummary/CheckoutSummary';
import { IngredientsObjectKeys } from "../../../interfaces/IngredientsObjectKeys";
import { Routes, Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";


const Checkout = () => {

    const [ingredient, setIngredients] = useState({});

    const ingredients: IngredientsObjectKeys = {};

    const location = useLocation();

    const getURLIngredients = () => {
        const query = new URLSearchParams(location.search);
        for(let params of query.entries()) {
           ingredients[params[0]] = +params[1]; 
        }
        setIngredients(ingredients)
        console.log(ingredients);
    }

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
                <Route path={'/contact-data'} element={<ContactData />}/> 
            </Routes>       
        </div>
    );
}

export default Checkout;