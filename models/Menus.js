const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const menusSchema = new Schema(
  {
    reference: Number,

    ranking: Number
  },
  { timestamps: true }
);

module.exports = model("Menus", menusSchema);
