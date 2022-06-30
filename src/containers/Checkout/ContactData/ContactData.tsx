import React, { ChangeEvent, Component } from "react";
import classes from "./ContactData.css";
import Button from "../../../components/UI/Button/Button";
import { IngredientsObjectKeys } from "../../../interfaces/IngredientsObjectKeys";
import axios from "../../../axios-orders";
import { AxiosResponse } from "axios";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Forms/Input/Input";
import { ObjectKeys } from "../../../interfaces/ObjectKeys";
import { History } from 'history';

interface ContactDataInterface {
    ingredients: IngredientsObjectKeys;
    price: number;
    history: History
}

class ContactData extends Component<ContactDataInterface> {
    constructor(props: ContactDataInterface) {
        super(props);
    }

    state = {
        orderForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                       type: 'text',
                       placeholder: 'Your Name' 
                    },
                    value: ''
                },
                street: {
                    elementType: 'input',
                    elementConfig: {
                       type: 'text',
                       placeholder: 'Street' 
                    },
                    value: ''
                },
                zipCode: {
                    elementType: 'input',
                    elementConfig: {
                       type: 'text',
                       placeholder: 'ZIP Code' 
                    },
                    value: ''
                },
                country: {
                    elementType: 'input',
                    elementConfig: {
                       type: 'text',
                       placeholder: 'Country' 
                    },
                    value: ''
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                       type: 'email',
                       placeholder: 'Your E-mail' 
                    },
                    value: ''
                },
                deliveryMethod: {
                    elementType: 'select',
                    elementConfig: {
                       options: [
                           {value: 'fastest', displayValue: 'Fastest'},
                           {value: 'normal', displayValue: 'Normal'},
                           {value: 'cheapest', displayValue: 'Cheapest'},
                        ]
                    },
                    value: ''
                }
            },
            loading: false   
    }

    orderHandler = () => {
        // event.preventDefault();
        // Firebase Databse Connection
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price
        }
        
        axios.post('/orders.json', order).then((response: AxiosResponse) => {
            this.setState({loading: false});
            this.props.history.push('/');
        }).catch(error => {
            this.setState({loading: false});
        });   
    }
    
    inputChangedHandler = (event: ChangeEvent<HTMLInputElement>, inputIdentifier: ObjectKeys) => {
            const updatedOrderForm = {
                ...this.state.orderForm
            }
            const updatedFormElement = {...updatedOrderForm[inputIdentifier]}
            updatedFormElement.value = event.target.value;
            updatedOrderForm[inputIdentifier] = updatedFormElement;
            this.setState({orderForm: updatedOrderForm});
        }

    render(): React.ReactNode {
        const formElementsArray = [];
        for(let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form>
                {formElementsArray.map((formElement, index) => (
                    <Input key={index} 
                           elementType={formElement.config.elementType} 
                           elementConfig={formElement.config.elementConfig} 
                           value={formElement.config.value}
                           changed={(event: ChangeEvent<HTMLInputElement>) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        if(this.state.loading) {
            form = <Spinner />
        }

        return(
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;







// import React, { ChangeEvent, useState } from "react";
// import Button from "../../../components/UI/Button/Button";
// import Spinner from "../../../components/UI/Spinner/Spinner";
// import classes from "./ContactData.css";
// import axios from "../../../axios-orders";
// import { AxiosResponse } from "axios";
// import { useNavigate } from "react-router-dom";
// import Input from "../../../components/UI/Forms/Input/Input";
// import { ObjectKeys } from "../../../interfaces/ObjectKeys";
// import { IngredientsObjectKeys } from "../../../interfaces/IngredientsObjectKeys";

// interface ContactDataInterface {
//     ingredients: IngredientsObjectKeys;
//     price: number;
// }

// const ContactData = (props: ContactDataInterface) => {

//     const [loading, setLoading] = useState(false);
//     const [purchasing, setPurchasing] = useState(true);
//     const [orderForm, setInputData] = useState({});
//     const navigate = useNavigate();

    // const state = {
    //     orderForm: {
    //             name: {
    //                 elementType: 'input',
    //                 elementConfig: {
    //                    type: 'text',
    //                    placeholder: 'Your Name' 
    //                 },
    //                 value: ''
    //             },
    //             street: {
    //                 elementType: 'input',
    //                 elementConfig: {
    //                    type: 'text',
    //                    placeholder: 'Street' 
    //                 },
    //                 value: ''
    //             },
    //             zipCode: {
    //                 elementType: 'input',
    //                 elementConfig: {
    //                    type: 'text',
    //                    placeholder: 'ZIP Code' 
    //                 },
    //                 value: ''
    //             },
    //             country: {
    //                 elementType: 'input',
    //                 elementConfig: {
    //                    type: 'text',
    //                    placeholder: 'Country' 
    //                 },
    //                 value: ''
    //             },
    //             email: {
    //                 elementType: 'input',
    //                 elementConfig: {
    //                    type: 'email',
    //                    placeholder: 'Your E-mail' 
    //                 },
    //                 value: ''
    //             },
    //             deliveryMethod: {
    //                 elementType: 'select',
    //                 elementConfig: {
    //                    options: [
    //                        {value: 'fastest', displayValue: 'Fastest'},
    //                        {value: 'normal', displayValue: 'Normal'},
    //                        {value: 'cheapest', displayValue: 'Cheapest'},
    //                     ]
    //                 },
    //                 value: ''
    //             }
    //         },
    //         loading: false   
    // }

//     // const orderHandler = (event: Event) => {
//     //     event.preventDefault();
//     const orderHandler = () => {
//         console.log(props.ingredients);
//         // Firebase Databse Connection
//         setLoading(true);
//         const order = {
//             ingredients: props.ingredients,
//             price: props.price,
//         }
        
//         axios.post('/orders.json', order).then((response: AxiosResponse) => {
//             setLoading(false);
//             setPurchasing(false);
//             navigate('/');
//         }).catch(error => {
//             setLoading(false);
//             setPurchasing(false);
//         });
//     }

//     const formElementsArray = [];
//     for(let key in state.orderForm) {
//         formElementsArray.push({
//             id: key,
//             config: state.orderForm[key]
//         });
//     }

//     const inputChangedHandler = (event: ChangeEvent<HTMLInputElement>, inputIdentifier: ObjectKeys) => {
//         const updatedOrderForm = {
//             ...state.orderForm
//         }
//         const updatedFormElement = {...updatedOrderForm[inputIdentifier]}
//         updatedFormElement.value = event.target.value;
//         updatedOrderForm[inputIdentifier] = updatedFormElement;
//         // setInputData({orderForm: updatedOrderForm});
//         setInputData({orderForm: updatedOrderForm});
//     }

//     const loadForm = () => {
//         let form = (
            // <form>
            //     {/* <Input elementType="..." elementConfig="..." value="..." /> */}
            //     {formElementsArray.map((formElement, index) => (
            //         <Input key={index} 
            //                elementType={formElement.config.elementType} 
            //                elementConfig={formElement.config.elementConfig} 
            //                value={formElement.config.value}
            //                changed={(event: ChangeEvent<HTMLInputElement>) => inputChangedHandler(event, formElement.id)} />
            //     ))}
            //     {/* <Input inputtype="input" type="email" name="email" placeholder="Your Mail" />
            //     <Input inputtype="input" type="text" name="street" placeholder="Street" />
            //     <Input inputtype="input" type="text" name="postal" placeholder="Postal Code" /> */}
            //     <br />
            //     <Button btnType="Success" clicked={orderHandler}>ORDER</Button>
            // </form>
//         );
//         if(loading) {
//             form = <Spinner />
//         }

//         return form
//     }

//     return(
//         <div className={classes.ContactData}>
//             <h4>Enter your Contact Data</h4>
//             {loadForm()}
//         </div>
//     );
// }

// export default ContactData;