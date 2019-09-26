import React, { useEffect, useState } from "react";
import "../../scss/viewItems.scss";
import axios from "axios";

function ViewItems() {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [id, setId] = useState("");
  useEffect(() => {
    axios.get("http://localhost:5000/shopping_items/").then(res => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  const deleteItem = id => {
    axios.delete(`http://localhost:5000/shopping_items/${id}`);
    setData(data.filter(item => item._id !== id));
  };
  return (
    <div className="viewItems">
      {data.map((item, index) => {
        console.log(item.selector);
        return (
          <div id="viewItem" key={index}>
            <p>
              <span>id:</span> {item._id}
            </p>
            <p>
              <span>item_type:</span> {item.item_type}
            </p>
            <p>
              <span>title:</span> {item.title}
            </p>
            <p>
              <span>imgUrl:</span> {item.imgUrl}
            </p>
            <p>
              <span>price: </span> {item.price}
            </p>
            <p>
              <span>selector: </span> {item.selector}
            </p>
            <div id="viewBtnSet">
              <button onClick={() => deleteItem(item._id)}>delete</button>
              <button>edit</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ViewItems;
