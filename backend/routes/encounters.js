const router = require('express').Router();
let Monster = require('../models/monster.model');

router.get('/', (req, res) => {
  // Need to authorize user?
  Monster.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.post('/save', (req, res) => {
  const newEncounter = {};

  try {
    const savedMonster = await newEncounter.save();
    res.send(savedMonster);
  } catch(err) {
    res.status(400).send(`Error: ${err}`);
  }
});

module.exports = router;