const mongoose = require("mongoose");

const ShopItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  itemType: {
    type: String,
    required: true,
  },
  color: [
    {
      type: String,
      required: true,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("shopItems", ShopItemSchema);
