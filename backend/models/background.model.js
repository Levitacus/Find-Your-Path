const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const backgroundSchema = new Schema({
  name: {type: String, required: true},
  link: {type: String, required: true},
  level: {type: Number, required: true},
  source: {type: String, required: true},
  ability: {type: [String], required: true},
  text: {type: String, required: true}
});

const Background = mongoose.model('Background', backgroundSchema);

module.exports = Background;