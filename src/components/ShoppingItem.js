import React, { useState } from "react";
import "../scss/shoppingItems.scss";

function ShoppingItems({ title, src, price, selector }) {
  const [val, setVal] = useState(1);
  const addVal = () => {
    setVal(val + 1);
  };
  const removeVal = () => {
    val > 1 ? setVal(val - 1) : setVal(1);
  };
  return (
    <div className="shoppingItems">
      <div id="itemPic">
        <img src={src} alt="vegt"></img>
      </div>
      <div className="itemDetails">
        <h3>{title}</h3>
        <div id="priceTag">
          <h5>
            <span>Rs</span>.{selector ? (price * val).toFixed(2) : price}
            <span style={selector ? { display: "none" } : {}}> / Kg</span>
          </h5>
          <div className="amount" style={selector ? { display: "none" } : {}}>
            <input type="number" defaultValue="1" min="1"></input>
            <select>
              <option>Kg</option>
              <option>g</option>
            </select>
          </div>
          <div
            className="amountSelector"
            style={!selector ? { display: "none" } : {}}
          >
            <button onClick={removeVal}>-</button>
            <p>{val}</p>
            <button onClick={addVal}>+</button>
          </div>
        </div>

        <button id="addToCart">Add to Cart</button>
      </div>
    </div>
  );
}

export default ShoppingItems;
