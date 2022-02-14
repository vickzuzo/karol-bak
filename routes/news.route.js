const express = require("express");
const parser = require("../config/cloudinary.config");
const {
  createNews,
  deleteNews,
  editNews,
  fetchNews,
} = require("../controllers/news.controller");

const newsRouter = express.Router();

newsRouter.route("/create_news").post(parser.array("images", 8), createNews);

newsRouter.route("/edit_news").post(editNews);

newsRouter.route("/delete_news").post(deleteNews);

newsRouter.route("/fetch_news").get(fetchNews);

module.exports = newsRouter;
