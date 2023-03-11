const express = require("express");
const router = express.Router();
const Event = require("../models/Events.js");

// endpoint to add a new event
//Get all events
router.get("/events", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (e) {
    console.log(e);
    res.status(500).send("Server Error");
  }
});

//Get one event
router.get("/events/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.json(event);
  } catch (e) {
    console.log(e);
    res.status(500).send("Server Error");
  }
});

router.post("/events", async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.json(newEvent);
    console.log(`Success! Created ${newEvent}`);
  } catch (e) {
    console.log(e);
    res.status(500).send("Server Error");
  }
});

router.put("/events/:id", async (req, res) => {
  const url = req.body;
  try {
    const event = await Event.findOneAndUpdate(
      { _id: req.params.id },
      { $set: url },
      { new: true, upsert: true }
    );
    if (!event) {
      res.send({ message: "Event not found" });
    }
    res.json(event);
  } catch (err) {
    res.json(err);
    console.error(err);
  }
});

module.exports = router;
