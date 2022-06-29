import React, { useState } from "react";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

const ContactData = (props: any) => {

    const [loading, setLoading] = useState(false);
    const [purchasing, setPurchasing] = useState(true);
    const navigate = useNavigate();

    const state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    // const orderHandler = (event: Event) => {
    //     event.preventDefault();
    const orderHandler = () => {
        console.log(props.ingredients);
        // Firebase Databse Connection
        setLoading(true);
        const order = {
            ingredients: props.ingredients,
            price: props.price,
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
            setLoading(false);
            setPurchasing(false);
            navigate('/');
        }).catch(error => {
            setLoading(false);
            setPurchasing(false);
        });
    }

    const checkFormStatus = () => {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your Mail" />
                <input className={classes.Input} type="text" name="street" placeholder="Street" />
                <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                <br />
                <Button btnType="Success" clicked={orderHandler}>ORDER</Button>
            </form>
        );
        if(loading) {
            form = <Spinner />
        }

        return form
    }

    return(
        <div className={classes.ContactData}>
            <h4>Enter your Contact Data</h4>
            {checkFormStatus()}
        </div>
    );
}

export default ContactData;