const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  date: String,
  name: String,
  role: String,
  feedback: String,
  solution: String,
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
