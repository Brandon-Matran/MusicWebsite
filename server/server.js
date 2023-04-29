const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const eventRouter = require("./routes/events");
const shopRouter = require("./routes/shop");
const userRouter = require("./routes/users");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use("/", eventRouter);
app.use("/", shopRouter);
app.use("/", userRouter);
const url = process.env.uri;

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
