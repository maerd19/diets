const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const objectivesShema = new Schema(
  {
    gender: {
      type: String,
      enum: ['man', 'woman'],
      required: true
    },
    age: {
      type: Number
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
    objectivesF: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);

module.exports = model("Objectives", objectivesShema);
