const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const newUser = new User({username, email});
  newUser.password = newUser.generateHash(req.body.password);

  newUser.save()
    .then(() => {
      res.json('User added!');
      res.redirect('/profile');
  })
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.get('profile', (req, res) => {
  res.send('This is your profile!');
});

module.exports = router;