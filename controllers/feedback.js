const express = require("express");
const router = express.Router();
const feedback = require("../models/feedback");

// Index
router.get("/feedback", async (req, res) => {
  try {
    const feedback = await feedback.find({});
    res.json(feedback);
  } catch (error) {
    console.log("error:", error);
    res.json({ error: "Something Went Wrong - Check Console" });
  }
});

// Create
router.post("/feedback", async (req, res) => {
  try {
    const feedback = await feedback.create(req.body);
    res.json(activity);
  } catch (error) {
    console.log("error:", error);
    res.json({ error: "Something Went Wrong - Check Console" });
  }
});

// Update
router.put("/feedback/:id", async (req, res) => {
  try {
    res.json(
      await feedback.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    console.log("error:", error);
    res.json({ error: "Something Went Wrong - Check Console" });
  }
});

// Delete
router.delete("/feedback/:id", async (req, res) => {
  try {
    res.json(await feedback.findByIdAndDelete(req.params.id));
  } catch (error) {
    console.log("error:", error);
    res.json({ error: "Something Went Wrong - Check Console" });
  }
});

module.exports = router;
