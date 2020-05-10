import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

export default class EncounterBuilder extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {encounter: []}
  }

  addToEncounter = (monster) => {
    this.setState({encounter: this.state.encounter.concat(monster)})
  }

  render() {
  return (
    <>
    <h2 className='justify-content-md-center'>Encounter Builder</h2>
    <div className='encounter-builder'>
    <Accordion className='monster-accordion'>
    {this.props.monsters.map((monster, index) => {
      return (
        <Card>
          <MonsterHeader monster={monster} id={index} key={`${monster.name}${index}`}/>
          <Button className='add-to-encounter-button' onClick={() => this.addToEncounter(monster)}>+</Button>
          <MonsterBody monster={monster} id={index} key={index}/>
        </Card>
      )
    })}
    </Accordion>
    
    <div className='encounter-monsters'>
      {
      (this.state.encounter.length !== 0) ? 
        <Accordion className='encounter-accordion'>
        {this.state.encounter.map((monster, index) => {
          return (
            <Card>
              <MonsterHeader monster={monster} id={index} key={`${monster.name}${index}`}/>
              <MonsterBody monster={monster} id={index} key={index}/>
            </Card>
          )
        })}
        </Accordion>
      : <div className='empty-encounter'>Encounter is Empty</div>
      }
    
      </div>
    </div>
    </>
  )}
}

const MonsterHeader = props => {
  return (
    <Accordion.Toggle as={Card.Header} eventKey={props.id}>
      <div className='container-fluid'>
        <div className='row'>
        <div className='col'>{props.monster.name}</div>
        <div className='col'>{props.monster.family}</div>
        </div>
        <div className='row'>
        <div className='col-4 col-sm-2 col-xl-1'>
        <ShieldIcon/>
        {String(props.monster.ac).split(' ')[0]}
        </div>
        <div className='col-4 col-sm-2 col-xl-1'>
        <HeartIcon/>
        {String(props.monster.hp).split(' ')[0]}
        </div>
        <div className='col-4 col-sm-2 col-xl-1'><p className='level'>{props.monster.level}</p></div>
        </div>
      </div>
      
    </Accordion.Toggle>
  )
}

const MonsterBody = props => {
  return (
    <Accordion.Collapse eventKey={props.id}>
      <Card.Body>
      <div className='row'>
        <ul className='card-list'>
          {props.monster.traits.map((elem) => {
            return <li className='card-trait'>{elem}</li>
          })}
        </ul>
      </div>
      <p><b>Perception: </b>{props.monster.perception}</p>
      <p><b>Languages: </b>{listWithCommas(props.monster.languages)}</p>
      <ul className='card-list'>
        {Object.keys(props.monster.skills).map(key => { 
          return <li className='card-list-item'><b>{`${capitalize(String(key))}: `}</b>{`${props.monster.skills[key]},`}</li>
        })
        }
      </ul>
      <ul className='card-list'>
        {Object.keys(props.monster.stats).map(key => { 
          return <li className='card-list-item'><b>{`${capitalize(String(key))}: `}</b>{`${props.monster.stats[key]},`}</li>
        })
        }
      </ul>
      <p>{colonSeperated('Items', listWithCommas(props.monster.items))}</p>
      <div>
        <MetaAccordion monster={props.monster}/>
      </div>
      
      <div className='row'>
          <h4>Description</h4>
          <a href={props.monster.link} target='_blank' rel='noopener noreferrer'>Link</a>
          <p className='text-description'>{props.monster.text}</p>
      </div>
      </Card.Body>
    </Accordion.Collapse>
  )
}

const MetaAccordion = props => {
  return (
    <Accordion className='meta-accordion'>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={0}>
          <p><b>Attacks</b></p>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={0}>
          <Card.Body className='sub-accordion'>
            <AttackAccordion attacks={props.monster.attacks}/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={1}>
          <p><b>Actions</b></p>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={1}>
          <Card.Body className='sub-accordion'>
            <ActionAccordion actions={props.monster.actions}/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      { (props.monster.spells.length) ?
      props.monster.spells.map((list, index) => {
        return (
        <Card>
        <Accordion.Toggle as={Card.Header} eventKey={2+index}>
          <p><b>{`${list.list} ---`} {colonSeperated('To hit', list.attack)} {colonSeperated('DC', list.dc)}</b></p>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={2+index}>
          <Card.Body className='sub-accordion'>
            <SpellAccordion spells={Object.values(list.levels)}/>
          </Card.Body>
        </Accordion.Collapse>
        </Card>
        )
      })
      : null
      }
    </Accordion>
  )
}

const AttackAccordion = props => {
  return (
    <Accordion className=''>
      {props.attacks.map((attack) => {
        return (
          <Card>
            <p><b>{`(${attack.name}) ${attack.text} (${attack.actions})`}</b></p>
            <p>{colonSeperated('Damage', attack.damage)}</p>
          </Card>
        )
      })}
    </Accordion>
  )
}

const ActionAccordion = props => {
  return (
    <Accordion className=''>
      {props.actions.map((action, index) => {
        return (
          <Card>
          <Accordion.Toggle as={Card.Header} eventKey={index}>
            <p><b>{`${returnIfExists(action.name)} ${(action.action) ? `(${action.action})`: ''}`}</b></p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={index}>
            <Card.Body>
            <p>
            <span>{colonSeperated('Trigger', action.trigger)} </span>
            <span>{colonSeperated('Effect', action.effect)}</span>
            </p>
            <p>{(action.text)? action.text : null}</p>
            </Card.Body>
          </Accordion.Collapse>
          </Card>
        )
      })}
    </Accordion>
  )
}

const SpellAccordion = props => {
  return (
    <Accordion className=''>
      {
      //update this to add all spell objects to a list, then sort that list by spell.level.
      //then map that to the accordion
        props.spells.map((spellsByLevel) => {
          return ((Object.keys(spellsByLevel).includes('spells')) ? (spellsByLevel.spells.map((spell, index) => {
          return (
            <Card>
            <Accordion.Toggle as={Card.Header} eventKey={`${index}-${spell.name}`}>
              <p><b>{`${returnIfExists(spell.name)}(${returnIfExists(spell.actions)})${returnIfExists(spell.constraint)} --- ${'Level ' + spell.level}`}</b></p>
              <p>{colonSeperated('Cast', listWithCommas(returnIfExists(spell.cast)))}</p>
              <p>{colonSeperated('Area', spell.area)}{((spell.area && spell.targets)||(spell.area && spell.range)) ? '; ' : null}{colonSeperated('Range', spell.range)}{(spell.range && spell.targets) ? '; ' : null}{colonSeperated('Targets', spell.targets)}</p>
              <p>{colonSeperated('Saving Throw', spell.savingthrow)}{(spell.savingthrow && spell.duration) ? '; ' : null} {colonSeperated('Duration', spell.duration)}</p>
              <p><b></b></p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={`${index}-${spell.name}`}>
              <Card.Body>
                <ul className='card-list'>
                  {(spell.traits != null) ? spell.traits.map((elem) => {
                  return <li className='card-trait'>{elem}</li>
                  }) : null}
                </ul>
                <p><b>{`${spell.text} (${spell.actions})`}</b></p>
                <p><b>{(spell.damage)? `Damage: ${spell.damage}` : null}</b></p>
                <span>------------------</span>
                {
                  (Object.keys(spell).includes('heightened')) ? Object.entries(spell.heightened).map((heightened) => {
                    return(<p>{colonSeperated(`Heightened(${textToNum(heightened[0])})`, heightened[1])}</p>)
                  }) : ''
                }
              </Card.Body>
            </Accordion.Collapse>
            </Card>
          )})) : [])
        })
    }
    </Accordion>
  )
}

const HeartIcon = () => {
  return (
    <svg className='heart' width="25" height="25" viewBox="0 0 178 148" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
      <path d="M154.769 10.9948C179.769 33.6614 193.569 74.9948 88.7686 138.995V29.9948C119.813 -15.4866 147.6 4.49475 154.769 10.9948Z" fill="#C73F3F"/>
      <path d="M88.7687 139C-16.0313 75 -2.23135 33.6667 22.7687 11C29.9378 4.49999 57.7244 -15.4814 88.7687 30M88.7686 138.995C193.569 74.9948 179.769 33.6614 154.769 10.9948C147.6 4.49475 119.813 -15.4866 88.7686 29.9948V138.995Z" stroke="black"/>
      </g>
      <defs>
      <filter id="filter0_d" x="0.499084" y="0.5" width="176.539" height="147.386" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      </defs>
    </svg>
  )
}

const ShieldIcon = () => {
  return (
    <svg className='shield' width="25" height="25" viewBox="0 0 198 197" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
      <path d="M99 0L137 28H193.397C193.397 28 183.377 93.5848 161 128C142.484 156.476 99 189 99 189C99 189 55.5158 156.476 37 128C14.6226 93.5848 4.60323 28 4.60323 28H65L99 0Z" fill="#FFF" fill-opacity="1"/>
      <path d="M11.428 37.8389C11.0775 36.0207 10.7768 34.3972 10.5252 33H65H66.7938L68.1785 31.8597L99.1708 6.33661L134.034 32.0253L135.357 33H137H187.475C187.223 34.3972 186.922 36.0207 186.572 37.8389C185.297 44.4518 183.367 53.624 180.746 63.8536C175.466 84.4676 167.525 108.792 156.808 125.274C147.938 138.916 132.869 153.797 119.74 165.437C113.224 171.214 107.276 176.115 102.96 179.569C101.412 180.808 100.076 181.859 99 182.697C97.9238 181.859 96.5876 180.808 95.0405 179.569C90.7236 176.115 84.7763 171.214 78.2605 165.437C65.1315 153.797 50.0621 138.916 41.1918 125.274C30.4746 108.792 22.5342 84.4676 17.2537 63.8536C14.6333 53.624 12.7028 44.4518 11.428 37.8389Z" stroke="#D4AF37" stroke-opacity="0.85" stroke-width="10"/>
      </g>
      <defs>
      <filter id="filter0_d" x="0.603233" y="0" width="196.794" height="197" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      </defs>
    </svg>
  )
}

function listWithCommas(arr) {
  return (arr.length === 0) ? 'none' : arr.map((elem, index) => {return (index === arr.length-1) ? elem : elem + ', '})
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function returnIfExists(obj) {
  return (obj) ? obj : ''
}

function colonSeperated(antecedent, subject) {
  return ((subject) ? <><b>{antecedent}</b>: {subject}</> : '')
}

function textToNum(text) {
  const alphas = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    plusone: '+1',
    plustwo: '+2'
  };
  return alphas[text];
}