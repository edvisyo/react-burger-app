import React, { ChangeEvent, Component } from "react";
import classes from "./ContactData.css";
import Button from "../../../components/UI/Button/Button";
import { IngredientsObjectKeys } from "../../../interfaces/IngredientsObjectKeys";
import axios from "../../../axios-orders";
import { AxiosResponse } from "axios";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Forms/Input/Input";
import { History } from 'history';
import { connect } from 'react-redux';

interface ContactDataInterface {
    ings: IngredientsObjectKeys;
    price: number;
    history?: History
}

interface State {
    ingredients: IngredientsObjectKeys; 
    totalPrice: number;
}

interface RulesobjectInterface {
    [key: string]: number | string | boolean;
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
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                street: {
                    elementType: 'input',
                    elementConfig: {
                       type: 'text',
                       placeholder: 'Street' 
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                zipCode: {
                    elementType: 'input',
                    elementConfig: {
                       type: 'text',
                       placeholder: 'ZIP Code' 
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 5,
                        maxLength: 5,
                    },
                    valid: false,
                    touched: false
                },
                country: {
                    elementType: 'input',
                    elementConfig: {
                       type: 'text',
                       placeholder: 'Country' 
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                       type: 'email',
                       placeholder: 'Your E-mail' 
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
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
                    value: 'fastest',
                    validation: {},
                    valid: true,
                    touched: true
                }
            },
            formIsValid: false,
            loading: false   
    }

    orderHandler = () => {
        // event.preventDefault();
        // Firebase Databse Connection
        this.setState({loading: true});
        const formData = {};
        for(let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier as keyof typeof this.state.orderForm].value;
        }
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData
        }
        
        axios.post('/orders.json', order).then((response: AxiosResponse) => {
            this.setState({loading: false});
            this.props.history!.push('/');
        }).catch(error => {
            this.setState({loading: false});
        });   
    }

    checkValidity = (value: string, rules: RulesobjectInterface) => {
        let isValid = true;
        if(!rules) {
            return true;
        }
        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }
    
    inputChangedHandler = (event: ChangeEvent<HTMLInputElement>, inputIdentifier: string) => {
            const updatedOrderForm = {
                ...this.state.orderForm
            }
            const updatedFormElement = {...updatedOrderForm[inputIdentifier as keyof typeof updatedOrderForm]}
            updatedFormElement.value = event.target.value;
            updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
            updatedFormElement.touched = true;
            updatedOrderForm[inputIdentifier] = updatedFormElement;

            let formIsValid = true;
            for(let inputIdentifiers in updatedOrderForm) {
                formIsValid = updatedOrderForm[inputIdentifier as keyof typeof updatedOrderForm].valid && formIsValid;
            }

            this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
        }

    render(): React.ReactNode {
        const formElementsArray = [];
        for(let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key as keyof typeof this.state.orderForm]
            });
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map((formElement, index) => (
                    <Input key={index} 
                           elementType={formElement.config.elementType} 
                           elementConfig={formElement.config.elementConfig} 
                           value={formElement.config.value}
                           invalid={!formElement.config.valid}
                           shouldValidate={formElement.config.validation}
                           touched={formElement.config.touched}
                           changed={(event: ChangeEvent<HTMLInputElement>) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
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

const mapStateToProps = (state: State) => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(ContactData);







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