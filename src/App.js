import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ShopPages from "./components/ShopPages";
import Login from "./components/Login";
import Admin from "./components/Admin";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Header />
          <Route path="/home" exact component={ShopPages} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
