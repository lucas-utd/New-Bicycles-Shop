import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { signout } from "./actions/userAction";
import PrivateRoute from "./components/PrivateRoute";
import CartView from "./views/CartView";
import HomeView from "./views/HomeView";
import OrderHistoryView from "./views/OrderHistoryView";
import OrderView from "./views/OrderView";
import PaymentMethodView from "./views/PaymentMethodView";
import PlaceOrderView from "./views/PlaceOrderView";
import ProductView from "./views/ProductView";
import ProfileView from "./views/ProfileView";
import RegisterView from "./views/RegisterView";
import ShippingAddressView from "./views/ShippingAddressView";
import SigninView from "./views/SigninView";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Bicycles Shop
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartView}></Route>
          <Route path="/product/:id" component={ProductView}></Route>
          <Route path="/signin" component={SigninView}></Route>
          <Route path="/register" component={RegisterView}></Route>
          <Route path="/shipping" component={ShippingAddressView}></Route>
          <Route path="/payment" component={PaymentMethodView}></Route>
          <Route path="/placeorder" component={PlaceOrderView}></Route>
          <Route path="/order/:id" component={OrderView}></Route>
          <Route path="/orderhistory" component={OrderHistoryView}></Route>
          <PrivateRoute path="/profile" component={ProfileView}></PrivateRoute>
          <Route path="/" component={HomeView} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
