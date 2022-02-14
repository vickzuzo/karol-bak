const Product = require("../models/Product.model");
const News = require("../models/News.model");
const ErrorResponse = require("../utils/errorResponse");

exports.fetchProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.send({ success: true, products });
  } catch (err) {
    next(new ErrorResponse("An Error Occurred on the server.", 400));
  }
};

exports.fetchNews = async (req, res, next) => {
  try {
    const news = await News.find();
    res.send({ success: true, news });
  } catch (err) {
    next(new ErrorResponse("An Error Occurred on the server.", 400));
  }
};
