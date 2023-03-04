const express = require('express');
const router = express.Router();
// const Event = require('../models/Event'); // assuming you have a model defined for your Event collection
// const Event = mongoose.model("Event", eventSchema);
// endpoint to get all events


// endpoint to add a new event
router.post('/events', async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.json(newEvent);
  } catch (e) {
    console.log(e);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
