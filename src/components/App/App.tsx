import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from "../../hoc/Layout/Layout";
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
// import BurgerBuilderr from '../../containers/BurgerBuilder/BurgerBuilderr';
import Checkout from '../../containers/Checkout/Checkout';
import Orders from '../../containers/Orders/Orders';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/orders" component={Orders} />
              <Route path="/" exact component={BurgerBuilder} />
            </Switch>
          </Layout>
        </BrowserRouter> 
      </div>
    );
  }
}

export default App;
