// Dependencies
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const db = mongoose.connection;
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const { PORT = 4000, MONGODB_URL } = process.env;


// Controllers
const seedPlanter = require("./controllers/seed");
const feedbackController = require("./controllers/feedback");

// Mongo Status Listeners
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

// Mount MiddleWare
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Controllers MiddleWare
app.use(seedPlanter);
app.use(feedbackController);

// Route
app.get("/", (req, res) => {
  res.send("Greetings");
});

// Express Listener
app.listen(PORT, () => {
  console.log.apply(`Express is listening on PORT: ${PORT}`);
});
