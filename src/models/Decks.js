const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
  deckName: {
    type: String,
    required: true,
  },
  publicView: {
    type: Boolean,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  deckcard: {
    main: {
      monster: [],
      spell: [],
      trap: [],
    },
    extra: [
      {
        cardname: {
          type: String,
          required: true,
        },
      },
    ],
    side: [
      {
        cardname: {
          type: String,
          required: true,
        },
      },
    ],
  },
});

const Decks = mongoose.model("Decks", schema);

module.exports = Decks;
