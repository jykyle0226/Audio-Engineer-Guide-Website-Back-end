const express = require("express");
const Router = express.Router();
const Feedback = require("../models/feedback");

// Index
Router.get("/Feedback", async (req, res) => {
  try {
    res.json(await Feedback.find({}));
  } catch (error) {
    console.log("error:", error);
    res.json({ error: "Something Went Wrong - Check Console" });
  }
});

// Create
Router.post("/Feedback", async (req, res) => {
  try {
    res.json(await Feedback.create(req.body));
  } catch (error) {
    console.log("error:", error);
    res.json({ error: "Something Went Wrong - Check Console" });
  }
});

// Update 
Router.put("/Feedback/:id", async (req, res) => {
  try {
    res.json(
      await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    console.log("error:", error);
    res.json({ error: "Something Went Wrong - Check Console" });
  }
});

// Delete
Router.delete("/Feedback/:id", async (req, res) => {
  try {
    res.json(await Feedback.findByIdAndDelete(req.params.id));
  } catch (error) {
    console.log("error:", error);
    res.json({ error: "Something Went Wrong - Check Console" });
  }
});

module.exports = Router;
