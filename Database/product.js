const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: false },
  info: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
