import React from "react";
import { Link } from "react-router-dom";
import "../scss/nav.scss";
import home from "../pics/home.png";
import veg from "../pics/veg.png";
import fruit from "../pics/fruit.png";
import other from "../pics/o.png";
import drinc from "../pics/drinc.png";

function Nav() {
  return (
    <nav id="mainNav">
      <Link to="/home">
        home <img src={home} alt="home"></img>
      </Link>
      <Link to="/vegetables">
        Vegetables <img src={veg} alt="veg"></img>
      </Link>
      <Link to="/fruits">
        Fruits <img src={fruit} alt="fruit"></img>
      </Link>
      <Link to="/drinks">
        beverages<img src={drinc} alt="pic"></img>
      </Link>
      <Link to="/other">
        other <img src={other} alt="other"></img>
      </Link>
    </nav>
  );
}

export default Nav;
