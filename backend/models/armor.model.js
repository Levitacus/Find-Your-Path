const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//need to change acBonus, dexCap, checkPenalty, speedPenalty, strength, etc
//into a number before entering

const armorSchema = new Schema({
  name: {type: String, required: true},
  link: {type: String, required: true},
  category: {type: String, required: true, default: ""},
  armorCategory: {type: String},
  price: {type: String, required: true, default: ""},
  acBonus: {type: Number},
  dexCap: {type: Number},
  checkPenalty: {type: Number},
  speedPenalty: {type: Number},
  strength: {type: Number},
  group: {type: String},
  level: {type: Number, required: true, default: 0},
  source: {type: String, required: true, default: ""},
  traits: {type: [String], required: true},
  bulk: {type: String, required: true, default: ""},
  text: {type: String, required: true},
  actions: {type: String},
  frequency: {type: String},
  craftrequirements: {type: String}
});

const Armor = mongoose.model('Armor', armorSchema);

module.exports = Armor;