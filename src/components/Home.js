import React from "react";
import ShoppingItems from "./ShoppingItem";
import beet from "../pics/veg/beet.png";
import carrot from "../pics/veg/carrot.png";
import cucumber from "../pics/veg/cucumber.png";
import cab from "../pics/veg/cab.png";
import apple from "../pics/fruits/apple.png";
import orange from "../pics/fruits/orange.png";
import banana from "../pics/fruits/banana.png";
import grapes from "../pics/fruits/grapes.png";
import coca from "../pics/beverages/coca.png";
import sprite from "../pics/beverages/sprite.png";
import pepsi from "../pics/beverages/pepsi.png";
import mil from "../pics/beverages/mil.png";
import "../scss/home.scss";
import Slider from "./Slider";
// import Nav from "./Nav";
// import Vegetables from "./Vegetables";
// import Fruit from "./Fruits";
// import Drink from "./Drink";
// import Other from "./Other";
// import { Route } from "react-router-dom";

function Home() {
  let vegArr = [
    { src: beet, price: "100.00", title: "Beetroot", selector: false },
    { src: carrot, price: "75.00", title: "Carrots", selector: false },
    { src: cucumber, price: "50.00", title: "Cucumber", selector: false },
    { src: cab, price: "65.00", title: "Cabbage", selector: false }
  ];
  let fruitArr = [
    { src: apple, price: "35.00", title: "Apples", selector: true },
    { src: grapes, price: "75.00", title: "Grapes", selector: false },
    { src: banana, price: "50.00", title: "Banana", selector: false },
    { src: orange, price: "25.00", title: "Orange", selector: true }
  ];
  let bevArr = [
    { src: coca, price: "235.00", title: "Coca-cola 1L", selector: true },
    { src: sprite, price: "275.00", title: "Sprite 1L", selector: true },
    { src: pepsi, price: "280.00", title: "Pepsi 1L", selector: true },
    {
      src: mil,
      price: "250.00",
      title: "Ambewela fresh Milk",
      selector: true
    }
  ];
  return (
    <React.Fragment>
      <Slider />

      <div className="home">
        {vegArr.map((item, index) => {
          return (
            <ShoppingItems
              key={index}
              src={item.src}
              title={item.title}
              price={item.price}
              selector={item.selector}
            />
          );
        })}
        {fruitArr.map((item, index) => {
          return (
            <ShoppingItems
              key={index}
              src={item.src}
              title={item.title}
              price={item.price}
              selector={item.selector}
            />
          );
        })}
        {bevArr.map((item, index) => {
          return (
            <ShoppingItems
              key={index}
              src={item.src}
              title={item.title}
              price={item.price}
              selector={item.selector}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Home;
