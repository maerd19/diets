const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const objectivesShema = new Schema(
  {
    gender: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    weight: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    exercise: {
      type: Boolean,
      required: true
    },
    objectives: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = model("Ojectives", objectivesShema);
