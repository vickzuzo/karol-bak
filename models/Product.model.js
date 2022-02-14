const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for the product"],
    },
    description: {
      type: String,
    },
    price: {
      type: String,
      required: [true, "Please provide a price for the product"],
    },
    images: [],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
