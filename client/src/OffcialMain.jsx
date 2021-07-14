import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import React from 'react';
import "./App.css"
import Topbar from './components/Page-Topbar/Page-Topbar'
import Products from './pages/Products/Products'
import AddProduct from './pages/Add-Product/AddProduct'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Customers from './pages/Customers/Customers'
import Detail from './pages/Detail/Detail'
import Orders from './pages/Orders/Orders'
import Shops from './pages/Shops/Shops';


function OfficialMain() {
  return (
    <div className="layout-wrapper">
      <Router>

        {/* <div className="layout-wrapper"> */}
          <Topbar />
          
          <div className="main-content">
            <div className="page-content">
              <div className="main-container-fluid">
                <Switch>

                  <Route path="/products" >
                    <Products />
                  </Route>

                  <Route path="/Detail" >
                    <Detail />
                  </Route>

                  <Route path="/orders" >
                    <Orders />
                  </Route>

                  <Route path="/customers" >
                    <Customers />
                  </Route>

                  <Route path="/cart" >
                    <Cart />
                  </Route>

                  <Route path="/checkout" >
                    <Checkout />
                  </Route>

                  <Route path="/shops" >
                    <Shops />
                  </Route>

                  <Route path="/add-product" >
                    <AddProduct />
                  </Route>

                </Switch>
              </div>
            </div>
          </div>

        {/* </div> */}

      </Router>
    </div>
  );
}

export default OfficialMain;