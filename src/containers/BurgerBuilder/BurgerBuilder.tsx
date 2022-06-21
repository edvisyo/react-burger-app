import React, { Component } from "react";
import Aux from '../../hoc/Aux/Aux';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import { Props } from '../../interfaces/Props';
import { BurgerBuilderInterface } from '../../interfaces/BurgerBuilderInterface';
import { IngredientsObjectKeys } from "../../interfaces/IngredientsObjectKeys";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";
import Spinner from '../../components/UI/Spinner/Spinner';
import { AxiosResponse } from "axios";

const INGREDIENT_PRICES: IngredientsObjectKeys = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}


class BurgerBuilder extends Component<Props, BurgerBuilderInterface> {
    
    constructor(props: BurgerBuilderInterface) {
        super(props);
        
        this.state = {
            ingredients: null,
            totalPrice: 4,
            purchaseable: false,
            purchasing: false,
            loading: false,
            errorMessage: false
        }
    }

    componentDidMount() {
        axios.get('/ingredients.json').then((response: AxiosResponse) => {
            this.setState({ingredients: response.data});
        }).catch(error => {
            this.setState({errorMessage: true});
        })
    }

    updatePurchaseState(ingredients: any): void {
        //Get values from ingredients object (like 0->1, 0->2 etc...)
        const sum = Object.keys(ingredients).map(ingredientKey => {
            return ingredients[ingredientKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({purchaseable: sum > 0});
    }

    addIngredientHandler = (type: string): void => {

        const oldCount:number = this.state.ingredients[type];
        const updatedCount:number = oldCount + 1;
        const updatedIngredients: IngredientsObjectKeys = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice:number = this.state.totalPrice !== undefined ? this.state.totalPrice : 0;
        const newPrice:number = oldPrice + priceAddition;
        
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);

    }      

    removeIngredientHandler = (type: string) => {
        
        const oldCount:number = this.state.ingredients[type];
        if(oldCount <= 0) {
            return
        }
        const updatedCount:number = oldCount - 1;
        const updatedIngredients: IngredientsObjectKeys = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice:number = this.state.totalPrice !== undefined ? this.state.totalPrice : 0;
        const newPrice:number = oldPrice - priceDeduction;
        
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    disableButton() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for( let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
            return disabledInfo[key];
        };
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    loadBurgerAndControls() {
        if(!this.state.ingredients) {
            return this.state.errorMessage ? <p>Ingredients can't be loaded!</p> : <Spinner />
        } else {
            return( 
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                        ingredientAdded={this.addIngredientHandler} 
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={this.disableButton()} 
                        price={this.state.totalPrice}
                        purchaseable={this.state.purchaseable}
                        makeOrder={this.purchaseHandler} />
                </Aux>
            );    
        }
    }

    makeOrder() {
        if(!this.state.ingredients || this.state.loading) {
            return <Spinner />
        } else {
            return <OrderSummary ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            price={this.state.totalPrice!} />
        }
    }

    purchaseContinueHandler = () => {
        // Firebase Databse Connection
        this.setState({loading: true})
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Maria',
                address: {
                    street: 'Main st. 42',
                    zipCode: '41351',
                    country: 'United States'
                },
                email: 'maria@yahoo.com'
            },
            deliveryMethod: 'fastest'
        }
        
        axios.post('/orders.json', order).then((response: AxiosResponse) => {
            this.setState({loading: false, purchasing: false});
        }).catch(error => {
            this.setState({loading: false, purchasing: false});
        });
    }

    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}>
                    {this.makeOrder()}              
                </Modal>
                    {this.loadBurgerAndControls()}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);