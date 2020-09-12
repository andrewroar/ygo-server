const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  race: {
    type: String,
    required: true,
  },
  vote: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
});

const CustomCards = mongoose.model("CustomCards", schema);

module.exports = CustomCards;
