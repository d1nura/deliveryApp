const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/static", express.static("public"));

const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongoose Connected");
});

const shoppingItems = require("./routes/shopping_items");

app.use("/shopping_items", shoppingItems);

app.listen(port, () => console.log(`listening on port ${port}...`));
