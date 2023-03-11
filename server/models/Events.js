const mongoose = require("mongoose");


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
    },
    eventUrl: {
        type: String,
        required: true,
    },
  })

  module.exports = mongoose.model("events", eventSchema);
