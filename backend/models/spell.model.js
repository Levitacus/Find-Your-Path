const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');

require('dotenv').config();
//const CharSchema = require('./character.model').charSchema;

const Schema = mongoose.Schema;

//characters: {type: [CharSchema]},

const spellSchema = new Schema({
  name: {type: String, required: true},
  link: {type: String, required: true, default: ""},
  family: {type: String, required: true, default: ""},
  level: {type: Number, required: true, default: 0},
  text: {type: String, required: true, default: ""},
  traits: {type: [String], required: true},
  source: {type: String, required: true, default: ""},
  traditions: {type: [String], required: true},
  cast: {type: [String], required: true, default: ""},
  actions: {type: String, required: true, default: ""},
  range: {type: String, required: true, default: ""},
  target: {type: String, required: true, default: ""},
  heightened: {type: {}, required: true, default: {}}
}, {
  timestamps: true,
});

//userSchema.plugin(uniqueValidator, {message: 'is already taken.'});

const Spell = mongoose.model('Spell', spellSchema);

module.exports = Spell;