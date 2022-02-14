const express = require("express");
const { deleteGallery } = require("../controllers/gallery.controller");
const {
  fetchProducts,
  fetchNews,
} = require("../controllers/general.controller");

const router = express.Router();

router.route("/fetch_all_products").get(fetchProducts);

router.route("/fetch_all_news").get(fetchNews);

router.route("/delete_gallery").post(deleteGallery);

module.exports = router;
