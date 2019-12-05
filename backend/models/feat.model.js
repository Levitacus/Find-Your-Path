const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const featSchema = new Schema({
  name: {type: String, required: true},
  link: {type: String, required: true, default: ""},
  level: {type: Number, required: true},
  source: {type: String, required: true, default: ""},
  traits: {type: [String], required: true},
  prerequisites: {type: String, required: true, default: ""},
  benefits: {type: String, required: true, default: ""},
  text: {type: String, required: true, default: ""},
  archetype: {type: String, trim: true}
});

const Feat = mongoose.model('Feat', featSchema);

module.exports = Feat;