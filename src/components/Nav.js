import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../scss/nav.scss";
// import home from "../pics/home.png";
import veg from "../pics/veg.png";
import fruit from "../pics/fruit.png";
import other from "../pics/o.png";
import drinc from "../pics/drinc.png";
// import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

import { Menu, MenuItem } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  menuItem: {
    margin: 1 + "vh",
    fontSize: 1.2 + "vw",
    height: 5 + "vh",
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase"
  }
}));

function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();
  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav id="mainNav">
      <Button color="inherit" onClick={handleClick}>
        Catogories &nbsp; <ExpandMoreOutlinedIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        id="menu"
      >
        {/* <MenuItem className={classes.menuItem}>
          <Link
            to="/"
            id="href"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={home}
              alt="home"
              id="pic"
              style={{ width: 2 + "vw", marginRight: 1 + "vw" }}
            ></img>
            home
          </Link>
        </MenuItem> */}
        <MenuItem className={classes.menuItem}>
          <Link
            to="/vegetables"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={veg}
              alt="veg"
              style={{ width: 2 + "vw", marginRight: 1.5 + "vw" }}
            ></img>
            Vegetables
          </Link>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <Link to="/fruits" style={{ display: "flex", alignItems: "center" }}>
            <img
              src={fruit}
              alt="fruit"
              style={{ width: 2 + "vw", marginRight: 1.5 + "vw" }}
            ></img>
            Fruits
          </Link>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <Link to="/drinks" style={{ display: "flex", alignItems: "center" }}>
            <img
              src={drinc}
              alt="pic"
              style={{ width: 2 + "vw", marginRight: 1.5 + "vw" }}
            ></img>
            beverages
          </Link>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <Link to="/other" style={{ display: "flex", alignItems: "center" }}>
            <img
              src={other}
              alt="other"
              style={{ width: 2 + "vw", marginRight: 1.5 + "vw" }}
            ></img>
            other
          </Link>
        </MenuItem>
      </Menu>
      {/* </Menu> */}
    </nav>
  );
}

export default Nav;
