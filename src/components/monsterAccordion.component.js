import React, { useState, useRef, useEffect } from 'react';

const monsters = require('../monsters.json');


export default function MonsterAccordion(props){
    return (
    <div className='accordion-section'>
      {monsters.map((monster, index) => {
        return (
          <MonsterInList monster={monster} key={index}/>
        )
      })}
    </div>
  )
}

const MonsterInList = props => {
  
  const id = props.monster.name.replace(/\s/g, '-');
  const [active, setActive] = useState(false);
  const contentRef = useRef(false);

  useEffect( () => {
    contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
  }, [contentRef, active])

  const toggleActive = () => {
    setActive(!active);
  }

  return (
    <div className='card'>
    <h5 className='mb-0'>
      <button 
        className='btn fillparent'
        type='button'
        onClick={toggleActive}
      >
        <MonsterHeader monster={props.monster}/>
      </button>
    </h5>

    <div className={`card-body-custom bg-dark fg-light ${active ? 'show' : 'collapse'}`}
      id={id}
      ref={contentRef}
    >
      <MonsterBody monster={props.monster}/>
    </div>
  </div>
  )
}

const MonsterHeader = props => {
  return (
    <div className='fillparent card-header-custom'>
      <span className='header-name'>{props.monster.name}</span>
      <span className='header-family'>{props.monster.family}</span>
      <span className='header-ac'>{String(props.monster.ac).split(' ')[0]}</span>
      <span className='header-hp'>{props.monster.hp}</span>
      <span className='header-level'>{props.monster.level}</span>
    </div>
  )
}

const MonsterBody = props => {
  return (
    <div>
    <div className='row m-0'>
      <div className='col-sm rounded border'>
        <h4 className='field-label text-center'>Stats</h4>
        <ul className='stat-block'>{Object.keys(props.monster.stats).map((key) => { return <li className='stat-item rounded border'>{`${String(key)}: ${props.monster.stats[key]}`}</li>})}</ul>
      </div>
      <div className='col-sm rounded border'>
        <h4 className='field-label text-center'>Speed</h4>
        <p className=''>{props.monster.speed}</p>
      </div>
      <div className='col-sm rounded border'>
        <h4 className='field-label text-center'>Saves</h4>
        <div className='save-block'>{Object.keys(props.monster.saves).map((key) => { return <p className='stat-item rounded border'>{String(key)}: {String(props.monster.saves[key]).split(';')[0]}</p>})}</div>
      </div>
    </div>
    <div className='row m-0'>
    <div className='col-sm rounded border'>
      <h4 className='field-label text-center'>Size</h4>
      <p className=''>{props.monster.size}</p>
    </div>
    <div className='col-sm rounded border'>
      <h4 className='field-label text-center'>Level</h4>
      <p className=''>{props.monster.level}</p>
    </div>
    <div className='col-sm rounded border'>
      <h4 className='field-label text-center'>Health</h4>
      <p className=''>{props.monster.hp}</p>
    </div>
    <div className='col-sm rounded border'>
      <h4 className='field-label text-center'>AC</h4>
      <p className=''>{props.monster.ac}</p>
    </div>
    <div className='col-sm rounded border'>
      <h4 className='field-label text-center'>Alignment</h4>
      <p className=''>{props.monster.alignment}</p>
    </div>
  </div>
  <div className='rounded border text-description p-2'>
      <h4 className='field-label text-center'>Description</h4>
      <p className=''>{props.monster.text}</p>
  </div>
  </div>
  )
}