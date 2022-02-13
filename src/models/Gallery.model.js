const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for the gallery"],
    },
    description: {
      type: String,
    },
    image: { type: String },
    category: { type: String },
  },
  {
    timestamps: true,
  }
);

const Gallery = mongoose.model("Gallery", GallerySchema);

module.exports = Gallery;
