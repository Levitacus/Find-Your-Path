const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//create a stats object for stats
//saves object for saves?

const monsterSchema = new Schema({
  name: {type: String, required: true},
  link: {type: String, required: true, default: ""},
  family: {type: String, required: true, default: ""},
  level: {type: Number, required: true, default: ""},
  alignment: {type: String, required: true, default: ""},
  type: {type: String, required: true, default: ""},
  size: {type: String, required: true, default: ""},
  traits: {type: [String], required: true},
  recallKnowledge: {type: String, required: true, default: ""},
  source: {type: String, required: true, default: ""},
  perception: {type: String, required: true, default: ""},
  languages: {type: [String], required: true},
  stats: {
    str: {type: String, required: true, default: ""},
    dex: {type: String, required: true, default: ""},
    con: {type: String, required: true, default: ""},
    int: {type: String, required: true, default: ""},
    wis: {type: String, required: true, default: ""},
    cha: {type: String, required: true, default: ""},
  },
  saves: {
    fortitude: {type: String, required: true, default: "", alias: "fort"},
    reflex: {type: String, required: true, default: "", alias: "ref"},
    will: {type: String, required: true, default: ""}
  },
  ac: {type: String, required: true, default: ""},
  hp: {type: String, required: true, default: ""},
  speed: {type: String, required: true, default: ""},
  spells: {type: [{
    name: String,
    text: String
  }], required: true, default: {}},
  skills: {type: {}, required: true},
  items: {type: [String], required: true},
  actions: {type: [{
    name: String,
    text: String,
    action: String
  }], required: true, default: {}},
  attacks: {type: [{
    name: String,
    text: String,
    actions: String,
    damage: String
  }], required: true, default: {}},
  text: {type: String, required: true, default: ""}
});

const Monster = mongoose.model('Monster', monsterSchema);

module.exports = Monster;