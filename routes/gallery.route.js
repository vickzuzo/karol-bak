const express = require("express");
const parser = require("../config/cloudinary.config");
const {
  createGallery,
  fetchGallery,
  deleteGallery,
} = require("../controllers/gallery.controller");

const router = express.Router();

router.route("/fetch_gallery").get(fetchGallery);

router.route("/create_gallery").post(parser.single("image"), createGallery);

// router.route("/edit_gallery").post(editGallery);

router.route("/delete_gallery").post(deleteGallery);

module.exports = router;
