const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const charSchema = new Schema({
  name: {type: String, required: true},
  ancestry: {type: String, required: true},
  background: {},
  class: {type: String, required: true},
  level: {type: Number, required: true},
  traits: {type: [String], required: true},
  stats: {type: Object, required: true},
  text: {type: String, required: true},
  archetype: {type: String, required: true, trim: true, default: ""}
});

const Character = mongoose.model('Character', charSchema);

module.exports = {Character, charSchema};