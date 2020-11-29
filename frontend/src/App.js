import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CartView from "./views/CartView";
import HomeView from "./views/HomeView";
import ProductView from "./views/ProductView";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Bicycles Shop
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartView}></Route>
          <Route path="/product/:id" component={ProductView}></Route>
          <Route path="/" component={HomeView} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
