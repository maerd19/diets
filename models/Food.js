const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const foodsSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    day: {
      type: String,
      required: true
    },
    ingredientes: {
      type: [String],
      required: true
    },
    schedule: {
      type: String,
      required: true
    },    
    diet: {
      // type: Schema.Types.ObjectId,
      // reference: "Menus",
      type: String,
      required: true
    },
    photo: {
      type: [String],
      required: true
    }
  },
  { timestamps: true }
);

module.exports = model("Foods", foodsSchema);
