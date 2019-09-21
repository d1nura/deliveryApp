import React from "react";
import "../scss/header.scss";
import search from "../pics/search.png";
import heart from "../pics/heart.png";
import cart from "../pics/cart.png";
import login from "../pics/login.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/home">Delivery</Link>
      </h1>
      <form>
        <input type="text" placeholder="Search items"></input>
        <img src={search} alt="search-icon"></img>
      </form>
      <div id="iconSet">
        <Link to="/admin">
          <img src={heart} alt="share"></img>{" "}
        </Link>
        <Link to="/login">
          <img src={login} alt="login"></img>
        </Link>

        <Link to="/cart">
          <img src={cart} alt="cart"></img>
        </Link>
      </div>
    </header>
  );
}

export default Header;
