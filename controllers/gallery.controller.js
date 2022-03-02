const Gallery = require("../models/Gallery.model");
const ErrorResponse = require("../utils/errorResponse");

exports.fetchGallery = async (req, res, next) => {
  try {
    const gallery = await Gallery.find();
    res.send({ success: true, gallery });
  } catch (err) {
    return next(new ErrorResponse("An Error occurred on the server.", 400));
  }
};

exports.createGallery = async (req, res, next) => {
  const { title, description, category, feature } = req.body;
  const image = req.file.path;
  try {
    const gallery = await Gallery.create({
      title,
      description,
      image,
      category,
      feature,
    });
    res.send({ success: true, gallery });
  } catch (err) {
    next(new ErrorResponse("An Error Occurred on the server.", 400));
  }
};

exports.deleteGallery = async (req, res, next) => {
  const { id } = req.body;
  try {
    // look into deleting more
    const gallery = await Gallery.findOneAndDelete({ _id: id });
    res.send({ success: true, gallery });
  } catch (err) {
    next(new ErrorResponse("An Error Occurred on the server.", 400));
  }
};
