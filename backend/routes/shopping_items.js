const router = require("express").Router();
let ShpItem = require("../models/shoppingItems.model");

router.route("/").get((req, res) => {
  ShpItem.find()
    .then(shpitm => res.json(shpitm))
    .catch(err => res.status(400).json("Err" + err));
});

router.route("/:id").delete((req, res) => {
  ShpItem.findByIdAndDelete(req.params.id)
    .then(shpItm => res.json(shpItm))
    .catch(err => res.status(400).json("Err" + err));
});

router.route("/veg").get((req, res) => {
  ShpItem.find({ item_type: "veg" })
    .then(item => res.json(item))
    .catch(err => res.status(400).json("Err" + err));
});

router.route("/fruits").get((req, res) => {
  ShpItem.find({ item_type: "fruits" })
    .then(item => res.json(item))
    .catch(err => res.status(400).json("Err" + err));
});

router.route("/bev").get((req, res) => {
  ShpItem.find({ item_type: "bev" })
    .then(item => res.json(item))
    .catch(err => res.status(400).json("Err" + err));
});

router.route("/add").post((req, res) => {
  const item_type = req.body.item_type;
  const imgUrl = req.body.imgUrl;
  const title = req.body.title;
  const price = req.body.price;
  const selector = req.body.selector;

  const newShpItem = new ShpItem({
    item_type,
    imgUrl,
    title,
    price,
    selector
  });

  newShpItem
    .save()
    .then(() => res.json("Item added!"))
    .catch(err => res.status(400).json("Err" + err));
});

module.exports = router;
