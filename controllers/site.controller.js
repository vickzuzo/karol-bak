const Site = require("../models/Site.model");
const ErrorResponse = require("../utils/errorResponse");
const { v4: uuidv4 } = require("uuid");
const Gallery = require("../models/Gallery.model");

exports.createSite = async (req, res, next) => {
  try {
    const site = await Site.create({ phone_number: "" });
    res.send({ success: true, site });
  } catch (err) {
    next(err);
  }
};

exports.fetchSite = async (req, res) => {
  try {
    const site = await Site.findById("62019119263f7e0e58b0a8e2");
    res.send({ success: true, site });
  } catch (err) {
    return next(new ErrorResponse("An error occurred on the server.", 401));
  }
};

exports.createCarousel = async (req, res, next) => {
  const { title, description, id } = req.body;
  const image = req.file.path;
  try {
    const carousels = {
      id: uuidv4(),
      image,
      title,
      description,
    };
    await Site.findByIdAndUpdate(
      id,
      { $push: { carousels } },
      { new: true, useFindAndModify: false }
    );
    res.send({ success: true });
  } catch (err) {
    next(new ErrorResponse("An error occurred on the server", 400));
  }
};

exports.editCarousel = async (req, res, next) => {
  const { title, description, price, id } = req.body;
  const images = req.files;

  try {
    let arr = [];
    images.map((image) => {
      arr.push(image.path);
    });
    await Product.findByIdAndUpdate(
      id,
      { title, description, price, images: arr },
      { new: true, useFindAndModify: false },
      (err, product) => {
        if (err) {
          next(new ErrorResponse("An Error Occurred on the server.", 400));
        } else {
          res.send({ success: true, product });
        }
      }
    );
  } catch (err) {
    console.log(err);
    // next(new ErrorResponse("An Error Occurred on the server.", 400));
  }
};

exports.deleteCarousel = async (req, res, next) => {
  const { siteId, carouselId } = req.body;
  const site = await Site.findById(siteId);
  const carousels = site.carousels;
  const newArray = carousels.filter(({ id }) => id !== carouselId);

  try {
    await Site.findOneAndUpdate(
      { _id: siteId },
      { carousels: newArray },
      { new: true, useFindAndModify: false },
      function (err, result) {
        if (err) {
          return res.send({
            success: false,
            message: "An error occured on the server. Please try again later.",
          });
        } else {
          return res.send({ success: true, site: result });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};

exports.updateSite = async (req, res, next) => {
  const { updates, id } = req.body;
  try {
    await Site.findByIdAndUpdate(
      id,
      { ...updates },
      { new: true, useFindAndModify: false }
    );
    res.send({ success: true });
  } catch (err) {
    next(new ErrorResponse("An error occurred on the server", 400));
  }
};
