import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Admin from "./components/admin/Admin";
import Home from "./components/Home";
import Vegetables from "./components/Vegetables";
import Fruit from "./components/Fruits";
import Other from "./components/Other";
import "typeface-roboto";
import Beverage from "./components/Bevrages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <div className="divHolder">
            <Route path="/vegetables" component={Vegetables} />
            <Route path="/fruits" component={Fruit} />
            <Route path="/drinks" component={Beverage} />
            <Route path="/other" component={Other} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
