require("dotenv").config({ path: "./config.env" });
const express = require("express");
const errorHandler = require("./middlewares/error");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
// Connect to database

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

//HTTP logger
app.use(morgan("tiny"));

app.use("/api/general", require("./routes/general.route"));
app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/site", require("./routes/site.route"));
app.use("/api/gallery", require("./routes/gallery.route"));
app.use("/api/product", require("./routes/product.route"));
app.use("/api/news", require("./routes/news.route"));

// Error errorHandler (SHOULD BE THE LAST PIECE OF MIDDLEWARE)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const server = app.listen(PORT, () =>
  console.log(`Server running on PORT: ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
