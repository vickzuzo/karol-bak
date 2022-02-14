const express = require("express");
const parser = require("../config/cloudinary.config");
const {
  createProduct,
  deleteProduct,
  editProduct,
} = require("../controllers/product.controller");

const router = express.Router();

router.route("/create_product").post(parser.array("images", 8), createProduct);

router.route("/edit_product").post(parser.array("images", 8), editProduct);

router.route("/delete_product").post(deleteProduct);

module.exports = router;
