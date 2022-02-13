const mongoose = require("mongoose");

const siteSchema = new mongoose.Schema({
  email: { type: String },
  phone_number: { type: String },
  carousels: [],
  facebook_link: { type: String },
  instagram_link: { type: String },
  twitter_link: { type: String },
});

const Site = mongoose.model("Site", siteSchema);

module.exports = Site;
