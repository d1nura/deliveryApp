import React, { useEffect, useState } from "react";
import axios from "axios";
import ShoppingItems from "./ShoppingItem";
import "../scss/veg.scss";
// import pic from "../pics/fruits/apple.png";

function PublicDisplay({ url }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`http://localhost:5000/shopping_items/${url}`).then(res => {
      console.log(res.data);
      setData(res.data);
      setLoading(false);
    });
  }, []);
  const results = () => {
    return (
      <div className="veg">
        {data.map((item, index) => {
          return (
            <ShoppingItems
              key={index}
              src={item.imgUrl}
              title={item.title}
              price={item.price}
              selector={item.selector === "true" ? true : false}
            />
          );
        })}
      </div>
    );
  };
  if (data && !loading) {
    console.log(data);
    return results();
  } else {
    return <p>Loading...</p>;
  }
}

export default React.memo(PublicDisplay);
