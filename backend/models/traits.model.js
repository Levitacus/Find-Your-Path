const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const traitSchema = new Schema({
  name: {type: String, required: true},
  link: {type: String, required: true},
  type: {type:String, required: true},
  source: {type: String, required: true},
  text: {type: String, required: true},
});

const Trait = mongoose.model('Trait', traitSchema);

module.exports = Trait;