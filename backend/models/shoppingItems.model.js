const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shoppingItems = new Schema(
  {
    item_type: { type: String },
    imgUrl: { type: String },
    title: { type: String },
    price: { type: Number },
    selector: { type: String }
  },
  {
    timestamps: true
  }
);

const shpItem = mongoose.model("shoppingItem", shoppingItems);

module.exports = shpItem;
