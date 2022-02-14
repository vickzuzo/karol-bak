const News = require("../models/News.model");
const ErrorResponse = require("../utils/errorResponse");

exports.createNews = async (req, res, next) => {
  const { title, content } = req.body;
  const images = req.files;
  try {
    let arr = [];
    images.map((image) => {
      arr.push(image.path);
    });
    const news = await News.create({ title, content, images: arr });
    res.send({ success: true, news });
  } catch (err) {
    next(new ErrorResponse("An Error Occurred on the server.", 400));
  }
};

exports.editNews = async (req, res, next) => {
  const { title, content, id } = req.body;
  const images = req.files;
  try {
    let arr = [];
    images.map((image) => {
      arr.push(image.path);
    });
    const news = await News.findOneAndUpdate(
      { _id: id },
      { title, content, images: arr }
    );
    res.send({ success: true, news });
  } catch (err) {
    next(new ErrorResponse("An Error Occurred on the server.", 400));
  }
};

exports.deleteNews = async (req, res, next) => {
  const { id } = req.body;
  try {
    // look into deleting more
    const news = await News.findOneAndDelete({ _id: id });
    res.send({ success: true, news });
  } catch (err) {
    next(new ErrorResponse("An Error Occurred on the server.", 400));
  }
};

exports.fetchNews = async (req, res) => {
  try {
    const news = await News.find();
    res.send({ success: true, news });
  } catch (err) {
    return next(new ErrorResponse("An error occurred on the server.", 401));
  }
};
