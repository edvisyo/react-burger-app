import React, { Component } from "react";
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from "./ContactData/ContactData";
import { History, Location } from 'history';

interface CheckoutInterface {
    history: History;
    location: Location;
}

class Checkout extends Component<CheckoutInterface> {
    constructor(props: CheckoutInterface) {
        super(props);
    }
    
    state = {
        ingredients: null,
        price: '0'
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = '0';
        for(let params of query.entries()) {
            if(params[0] === 'price') {
                price = params[1];
            } else {
                ingredients[params[0]] = +params[1];
            }
        }
        this.setState({ingredients: ingredients, totalPrice: price});
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    cancelCheckout={this.checkoutCancelHandler}
                    continueCheckout={this.checkoutContinueHandler}
                    />
                <Route path={this.props.match.path + '/contact-data'} render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)} />      
            </div>
        );
    }
}

export default Checkout;


// import React, { Component, useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
// import { IngredientsObjectKeys } from "../../interfaces/IngredientsObjectKeys";
// import { Routes, Route } from "react-router-dom";
// import ContactData from "./ContactData/ContactData";


// const Checkout = () => {

//     let [ingredient, setIngredients] = useState({});
//     const [totalPrice, setPrice] = useState(0)

//     const ingredients: IngredientsObjectKeys = {};

//     const location = useLocation();

//     const getURLIngredients = () => {
//         const query = new URLSearchParams(location.search);
//         let price = '0';
//         for(let params of query.entries()) {
//             if(params[0] === 'price') {
//                 price = params[1];
//             } else {
//                 ingredients[params[0]] = +params[1]; 
//             }
//         }
//         setIngredients(ingredient = ingredients);
//         setPrice(parseFloat(price));
//     }
//     console.log(ingredient);

//     useEffect(() => {
//         getURLIngredients();
//     }, []);

//     const navigate = useNavigate();

//     const checkoutCancelHandler = () => {
//         navigate('/');
//     }

//     const checkoutContinueHandler = () => {
//         navigate('/checkout/contact-data');
//     }

//     return(
//         <div>
//             <CheckoutSummary 
//                     ingredients={ingredients}
//                     cancelCheckout={checkoutCancelHandler}
//                     continueCheckout={checkoutContinueHandler} />
//             <Routes>
//                 <Route path={'/contact-data'} element={<ContactData ingredients={ingredient} price={totalPrice} />}/> 
//             </Routes>       
//         </div>
//     );
// }

// export default Checkout;