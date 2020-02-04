const router = require('express').Router();
let User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const {registerValidation, loginValidation} = require('../validation');
const verify = require('./verifyToken')
// hash the password
generateHash = async password => {
  return await bcrypt.hash(password, await bcrypt.genSalt(10));
};

// checking if password is valid
validPassword = async (password, hashedPass) => {
  return await bcrypt.compare(password, hashedPass);
};

router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.post('/register', async (req, res) => {
  
  //Validate data
  const { error } = registerValidation(req.body);
  if(error) return res.status(400).send(`Error: ${error.details[0].message}`);
  
  //Check if user email exists
  const emailExists = await User.findOne({email: req.body.email});
  if(emailExists) return res.status(400).send('Email is taken.');

  //Check if username exists
  const usernameExists = await User.findOne({username: req.body.username});
  if(usernameExists) return res.status(400).send('Username is taken.')

  //Create a new user
  const newUser = new User({
    username: req.body.username, 
    email: req.body.email, 
    encounters: req.body.encounters,
    password: await generateHash(req.body.password)
  });

  try {
    await newUser.save();
    //console.log("Account Created!")
    res.send('Account created!')
    //res.redirect('./profile');
  } catch(err) {
    res.status(400).send(`Error: ${err}`);
  }
});

router.post('/login', async (req, res) => {

  //Validate the login
  const { error } = loginValidation(req.body);
  if(error) return res.status(400).send(`Error: ${error.details[0].message}`);

  //check if the email exists and return the document with the email
  const user = await User.findOne({email: req.body.email}); //, (err, data) => { err ? false : data; }
  if(!user) return res.status(400).send('Invalid Email or Password');

  //check if the password matches the document with the email
  const access = await validPassword(req.body.password, user.password);
  if(!access) return res.status(400).send('Invalid Email or Password');

  //Create and assign a jwt
  const token = jwt.sign(
      {_id: user._id, username: user.username}, 
      process.env.SECRET
    );
  
  res.header('auth-token', token).send(token);

  //res.send('Successfully logged in!');

});

//save encounters
router.put('/encounter', verify, (req, res) => {
  
});


//:username
router.get('/profile/:username', (req, res) => {
  username = req.params;
  res.send('This is your profile!' + username);
});

module.exports = router;