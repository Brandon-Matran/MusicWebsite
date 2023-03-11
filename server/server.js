const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const eventRouter = require("./routes/events")

require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use("/", eventRouter);

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

// establish connection to node.js server
app.listen(5000, () => {
  console.log("Connected to port 5000");
});
