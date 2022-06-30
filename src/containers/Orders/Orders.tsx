import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { AxiosResponse } from "axios";
import Spinner from "../../components/UI/Spinner/Spinner";


class Orders extends Component {
    
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json').then((response: AxiosResponse) => {
            const fetchedOrders = [];
            for(let key in response.data) {
                fetchedOrders.push({...response.data[key], id: key});
            }
            this.setState({loading: false, orders: fetchedOrders});
        }).catch(error => {
            this.setState({loading: false});
            console.log(error);
        });
    }
    
    render() {
        return(
            <div>
                {this.state.orders.map((order, index) => (
                    <Order 
                        key={index}
                        ingredients={order['ingredients']}
                        price={order['price']} />
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);

// import React, { useEffect, useState } from "react";
// import Order from "../../components/Order/Order";
// import axios from "../../axios-orders";
// import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

// const Orders = () => {

//     let [orders, setOrders] = useState({});
//     const [loading, setLoading] = useState(true);

//     const getOrders = async () => {
//         const response = await axios.get('/orders.json');
//         const fetchedOrders = [];
//         for(let key in response.data) {
//             fetchedOrders.push({...response.data[key], id: key});
//         }
//         //console.log(fetchedOrders);
//         setLoading(false);
//         setOrders(fetchedOrders);
//         // console.log(orders);
//     }

//     console.log(orders);

//     useEffect(() => {
//         getOrders();
//     }, []);

//     return(
//         <div>
//             {orders.map(order => (

//             ))}
//         </div>
//     );
// }

// export default withErrorHandler(Orders, axios);