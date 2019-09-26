import React, { useState, useRef } from "react";
import axios from "axios";
import "../../scss/addShpItems.scss";

function AddShpItems() {
  const [type, setType] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [selector, setSelector] = useState(true);
  const [add, setAdd] = useState(false);
  const [loading, setLoading] = useState();
  const ref = useRef(null);

  const addShpItems = e => {
    setLoading(true);
    for (let i of ref.current.children) {
      i.value = "";
    }
    e.preventDefault();
    const shpItems = {
      item_type: type,
      imgUrl: imgUrl,
      title: title,
      price: price,
      selector: selector
    };
    console.log(shpItems);
    axios
      .post("http://localhost:5000/shopping_items/add", shpItems)
      .then(res => {
        console.log(res.data);
        setAdd(true);
        setLoading(false);
      });
  };
  const addType = e => {
    setType(e.target.value);
  };
  const addImgUrl = e => {
    setImgUrl(e.target.value);
  };
  const addTitle = e => {
    setTitle(e.target.value);
  };
  const addPrice = e => {
    setPrice(e.target.value);
  };
  const addSelector = e => {
    // let val = e.target.value === "true" ? Boolean(true) : Boolean(false);
    setSelector(e.target.value);
  };

  return (
    <div className="addShpItems">
      <h3 style={!add ? { display: "none" } : {}}>Item added!</h3>
      <form onSubmit={addShpItems} ref={ref}>
        <input onChange={addType} type="text" placeholder="Item Type"></input>
        <input onChange={addImgUrl} type="text" placeholder="Image url"></input>
        <input onChange={addTitle} type="text" placeholder="Title"></input>
        <input onChange={addPrice} type="number" placeholder="Price"></input>
        <form-group>
          <label>Set selector</label>
          <select onChange={addSelector}>
            <option value={true}>true</option>
            <option value={false}>false</option>
          </select>
        </form-group>
        <input
          id="submit"
          type="submit"
          value={loading ? "Adding..." : "ADD"}
        ></input>
      </form>
    </div>
  );
}

export default AddShpItems;
