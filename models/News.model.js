const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for the news"],
    },
    content: {
      type: String,
    },
    images: [],
  },
  {
    timestamps: true,
  }
);

const News = mongoose.model("News", newsSchema);

module.exports = News;
