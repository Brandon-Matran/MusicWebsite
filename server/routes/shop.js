const express = require("express");
const router = express.Router();
const Shop = require("../models/Shop.js");

//endpoints
router.get("/shop", async (req, res) => {
  try {
    const items = await Shop.find();
    res.json(items);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.get("/shop/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const item = await Shop.findOne({ _id: id });
    res.json(item);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.post("/shop", async (req, res) => {
  try {
    const item = await Shop.create(req.body);
    res.json(item);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
