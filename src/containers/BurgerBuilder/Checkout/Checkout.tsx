import React, { Component, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CheckoutSummary from '../../../components/Order/CheckoutSummary/CheckoutSummary';
import { IngredientsObjectKeys } from "../../../interfaces/IngredientsObjectKeys";
import classes from './Checkout.css';

interface CheckoutInterface {
    ingredients?: IngredientsObjectKeys;
}

const Checkout = (props: CheckoutInterface) => {

    const [ingredient, setIngredients] = useState({});

    const ingredients: IngredientsObjectKeys = {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    }

    const location = useLocation();

    const getURLIngredients = () => {
        const query = new URLSearchParams(location.search);
        const ingredients = {};
        for(let params of query.entries()) {
           ingredients[params[0]] = +params[1]; 
        }
        setIngredients({ingredient: ingredients});
        console.log(ingredient);
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
        </div>
    );
}

export default Checkout;