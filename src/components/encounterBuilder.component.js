import React from 'react';
import MonsterAccordion from './monsterAccordion.component';
/*
const React = require('react');
const MonsterAccordion = require('./monsterAccordion.component');
*/
export default class EncounterBuilder extends React.Component {
  //Needs the shared state of both MonsterAccordion and Encounter
  render() {
    return <div>
      <MonsterAccordion/>
    </div>
  }
}

//module.exports = EncounterBuilder;