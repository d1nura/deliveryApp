import React from "react";
import "../scss/header.scss";
// import search from "../pics/search.png";
// import heart from "../pics/heart.png";
// import cart from "../pics/cart.png";
// import login from "../pics/login.png";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Typography, InputBase, IconButton, AppBar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Nav from "./Nav";

// import IconButton from "@materia l-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  appBar: {
    padding: "2vh 2.5vw 2vh 2.5vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: 12 + "vh"
  },
  input: {
    marginRight: 1 + "vw"
  },
  grid1: {
    height: 10 + "vh"
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <header>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Grid
          container
          alignItems="center"
          justify="space-between"
          className={classes.grid1}
        >
          <Grid item className={classes.grid}>
            <Typography variant="h4" component="h1">
              <Link to="/">Delivery</Link>
            </Typography>
          </Grid>
          <Grid item className={classes.grid}>
            <Grid container justify="center">
              <form>
                <InputBase
                  placeholder="Search items"
                  className={classes.input}
                />
                <IconButton aria-label="search" className={classes.iconButton}>
                  <SearchIcon />
                </IconButton>
              </form>
            </Grid>
          </Grid>
          <Grid item className={classes.grid}>
            {/* <div id="iconSet"> */}
            <Grid container alignItems="center" justify="flex-end">
              <Nav />
              <Link to="/admin">
                <IconButton className={classes.iconButton} color="inherit">
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
              </Link>
              <Link to="/login">
                <IconButton className={classes.iconButton} color="inherit">
                  <ExitToAppOutlinedIcon />
                </IconButton>
              </Link>
              <Link to="/cart">
                <IconButton className={classes.iconButton} color="inherit">
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </Link>
            </Grid>

            {/* </div> */}
          </Grid>
        </Grid>
      </AppBar>
    </header>
  );
}

export default Header;
