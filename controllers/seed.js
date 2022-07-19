const express = require("express");
const seedRouter = express.Router();
const Seed = require("../models/seed");

const mongoose = require("mongoose");
const seedSchema = new mongoose.Schema({
  date: String,
  name: String,
  role: String,
  feedback: String,
  solution: String,
});
const seedData = mongoose.model("feedback", seedSchema);

// Seed Viewer?
seedRouter.get("/seed", async (req, res) => {
  res.send("Seed data home page");
});

// Seed Planter
seedRouter.get("/seed/plant", async (req, res) => {
  seedData.deleteMany({}, (error, allSeeds) => {});

  seedData.create(Seed, (error, Seed) => {
    res.send("Seed Data Planted");
  });
});

module.exports = seedRouter;
