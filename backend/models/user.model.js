const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');

require('dotenv').config();
//const CharSchema = require('./character.model').charSchema;

const secret = process.env.SECRET;
const Schema = mongoose.Schema;

//characters: {type: [CharSchema]},

const userSchema = new Schema({
  username: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"], 
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
    index: true,
    unique: true, 
    trim: true,
    minlength: 3,
    maxlength: 255
  },
  email: {
    type: String, 
    trim: true,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true,
    maxlength: 255
  },
  characters: {type: []},
  encounters: {type: []},
  password: {
    type: String,
    required: true,
    minlength: 6
  }
}, {
  timestamps: true,
});

//userSchema.plugin(uniqueValidator, {message: 'is already taken.'});

const User = mongoose.model('User', userSchema);

module.exports = User;