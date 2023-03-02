const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

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

const uri = "mongodb+srv://bmatran:admin@cluster27946.yd9gxwv.mongodb.net/myDatabase?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log(e);
  }
}
connect();

//endpoints

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
app.listen(5060, () => {
  console.log("Connected to port 5060");
});
