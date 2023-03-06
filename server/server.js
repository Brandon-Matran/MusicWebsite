const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


require('dotenv').config();
app.use(cors());
app.use(express.json());

//Defining the Schema

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
    get: function(date) {
      return date.toISOString().substr(0, 10);
    },
    set: function(dateString) {
      return new Date(dateString);
    }
  }
})

const Event = mongoose.model("Event", eventSchema);

//establish the connection to MongoDb

const url = process.env.uri

async function connect() {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log(e);
  }
}
connect();

//endpoints

app.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    console.log(`Found these events ${events}`);
    res.json(events);
  } catch (e) {
    console.log(e);
    res.status(500).send('Server Error');
  }
});

app.post("/events", async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.json(newEvent);
    console.log(`Success! Created ${newEvent}`);
  } catch (e) {
    console.log(e);
    res.status(500).send("Server Error");
  }
});

// establish connection to node.js server
app.listen(5000, () => {
  console.log("Connected to port 5000");
});
