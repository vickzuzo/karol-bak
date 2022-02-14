const express = require("express");
const parser = require("../config/cloudinary.config");

const {
  createSite,
  fetchSite,
  createCarousel,
  updateSite,
  deleteCarousel,
} = require("../controllers/site.controller");

const siteRouter = express.Router();

// CREATE SITE (RUN ONLY ONCE ON NEW DATABASE SETUP USING POSTMAN)

siteRouter.route("/create_site").post(createSite);

siteRouter.route("/fetch_site_details").get(fetchSite);

siteRouter
  .route("/create_carousel")
  .post(parser.single("image"), createCarousel);

// siteRouter
//   .route("/edit_carousel")
//   .post(parser.array("images", 8), editCarousel);

siteRouter.route("/delete_carousel").post(deleteCarousel);

siteRouter.route("/update_site").post(updateSite);

module.exports = siteRouter;
