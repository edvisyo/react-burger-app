import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from "../../hoc/Layout/Layout";
//import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import BurgerBuilderr from '../../containers/BurgerBuilder/BurgerBuilderr';
import Checkout from '../../containers/BurgerBuilder/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div>
          {/* <Layout>
            <BurgerBuilder />
            <Checkout />
          </Layout> */}
          <Layout>
            <Routes>
              <Route path="/" element={<BurgerBuilderr />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Layout>
          {/* <Router>
              <Layout>
                <Routes>
                    <Route path='/' element={<BurgerBuilder/>} />
                    <Route path='/checkout' element={<Checkout/>} />
                </Routes>
              </Layout>
          </Router> */}
      </div>
    );
  }
}

export default App;
