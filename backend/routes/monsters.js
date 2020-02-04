const router = require('express').Router();
let Monster = require('../models/monster.model');

router.get('/', async (req, res) => {
  await Monster.find()
    .then(monsters => res.json(monsters))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.post('/add', async (req, res) => {
  const newMonster = new Monster({
    name: req.body.name,
    link: req.body.link,
    family: req.body.family,
    level: req.body.level,
    alignment: req.body.alignment,
    type: req.body.type,
    size: req.body.size,
    traits: req.body.traits,
    recallknowledge: req.body.recallknowledge,
    source: req.body.source,
    perception: req.body.perception,
    languages: req.body.languages,
    stats: {
      str: req.body.stats.str,
      dex: req.body.stats.dex,
      con: req.body.stats.con,
      int: req.body.stats.int,
      wis: req.body.stats.wis,
      cha: req.body.stats.cha
    },
    saves: {
      fortitude: req.body.saves.fortitude,
      reflex: req.body.saves.reflex,
      will: req.body.saves.will
    },
    ac: req.body.ac,
    hp: req.body.hp,
    speed: req.body.speed,
    spells: req.body.spells,
    skills: req.body.skills,
    items: req.body.items,
    actions: req.body.actions,
    attacks: req.body.attacks,
    text: req.body.text,
    attributes: req.body.attributes,
    senses: req.body.senses,
    custom: req.body.custom || false
  });

  try {
    const savedMonster = await newMonster.save();
    res.send(savedMonster);
  } catch(err) {
    res.status(400).send(`Error: ${err}`);
  }
});

module.exports = router;