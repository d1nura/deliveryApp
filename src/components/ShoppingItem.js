import React, { useState } from "react";
import "../scss/shoppingItems.scss";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import {
  Card,
  CardContent,
  Button,
  CardMedia,
  CardActions,
  IconButton,
  Typography,
  Input
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    position: "relative",
    overflow: "hidden"
  },
  iconButton: {
    width: 1.4 + "vw",
    height: 1.4 + "vw"
  },
  button: {
    width: 0.5 + "vw"
  },
  cardMedia: {
    borderBottom: "1px solid rgb(245, 245, 245)",
    cursor: "pointer",
    width: 100 + "%",
    height: 40 + "vh",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 1 + "vw"
  }
}));

function ShoppingItems({ title, src, price, selector }) {
  const classes = useStyles();

  const [val, setVal] = useState(1);

  const addVal = () => {
    setVal(val + 1);
  };
  const removeVal = () => {
    val > 1 ? setVal(val - 1) : setVal(1);
  };
  return (
    <div className="shoppingItems">
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia}>
          <img id="itemPic" src={src} alt="vegt"></img>
        </CardMedia>

        <div className="itemDetails">
          <CardContent className={classes.cardContent}>
            <Typography variant="body2" color="secondary">
              {title}
            </Typography>

            <div id="priceTag">
              <Typography variant="h6" color="textSecondary">
                <span>Rs</span>.{selector ? (price * val).toFixed(2) : price}
                <span style={selector ? { display: "none" } : {}}> / Kg</span>
              </Typography>
              <div className="amount">
                <CardActions
                  className={classes.cardActions}
                  style={selector ? { display: "none" } : {}}
                >
                  <Input defaultValue="1" type="number"></Input>
                  <select>
                    <option value="Kg">Kg</option>
                    <option value="g">g</option>
                  </select>
                </CardActions>
              </div>

              <CardActions
                className={classes.cardActions}
                style={!selector ? { display: "none" } : {}}
              >
                <IconButton
                  onClick={removeVal}
                  size="medium"
                  color="secondary"
                  id="secondary"
                >
                  <RemoveIcon className={classes.iconButton} />
                </IconButton>
                <p>{val}</p>
                <IconButton
                  onClick={addVal}
                  size="medium"
                  color="secondary"
                  id="secondary"
                >
                  <AddIcon className={classes.iconButton} />
                </IconButton>
              </CardActions>
            </div>
            <Button
              className={classes.button1}
              variant="outlined"
              size="medium"
              id="addToCart"
            >
              Add to Cart
            </Button>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default ShoppingItems;
