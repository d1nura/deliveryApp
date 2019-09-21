import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Vegetables from "./Vegetables";
import Fruit from "./Fruits";
import Drink from "./Drink";
import Other from "./Other";
import Slider from "./Slider";

function ShopPages() {
  return (
    <BrowserRouter>
      <Slider />
      <Nav />
      <div className="divHolder">
        <Route path="/home" exact component={Home} />
        <Route path="/vegetables" component={Vegetables} />
        <Route path="/fruits" component={Fruit} />
        <Route path="/drinks" component={Drink} />
        <Route path="/other" component={Other} />
      </div>
    </BrowserRouter>
  );
}

export default ShopPages;
