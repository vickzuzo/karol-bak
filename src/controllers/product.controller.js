const Product = require("../models/Product.model");
const ErrorResponse = require("../utils/errorResponse");

exports.createProduct = async (req, res, next) => {
  const { title, description, price } = req.body;
  const images = req.files;
  try {
    let arr = [];
    images.map((image) => {
      arr.push(image.path);
    });
    const product = await Product.create({
      title,
      description,
      price,
      images: arr,
    });
    res.send({ success: true, product });
  } catch (err) {
    next(new ErrorResponse("An Error Occurred on the server.", 400));
  }
};

exports.editProduct = async (req, res, next) => {
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

exports.deleteProduct = async (req, res, next) => {
  const { id } = req.body;
  try {
    // look into deleting more
    const product = await Product.findOneAndDelete({ _id: id });
    res.send({ success: true, product });
  } catch (err) {
    next(new ErrorResponse("An Error Occurred on the server.", 400));
  }
};
