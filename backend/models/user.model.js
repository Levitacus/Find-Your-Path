const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcryptjs');

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
    minlength: 3
  },
  email: {
    type: String, 
    trim: true,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true
  },
  characters: {type: []},
  encounters: {type: []},
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
});

userSchema.plugin(uniqueValidator, {message: 'is already taken.'});

// hash the password
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;