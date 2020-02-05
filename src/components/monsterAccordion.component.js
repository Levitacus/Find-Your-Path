import React, { useState, useRef, useEffect } from 'react';

const monsters = require('../monsters.json');


export default function MonsterAccordion(props){
    return (
    <div className='monster-accordion'>
    <div className='accordion-header'>
      <h4 className='header text-center'>Name</h4>
      <h4 className='header text-center'>Family</h4>
      <h4 className='header text-center'>AC</h4>
      <h4 className='header text-center'>HP</h4>
      <h4 className='header text-center'>Level</h4>
    </div>
    <div className='accordion-section'>
      {monsters.map((monster, index) => {
        return (
          <MonsterInList monster={monster} key={index}/>
        )
      })}
    </div>
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
      <div className='header'>{props.monster.name}</div>
      <div className='header'>{props.monster.family}</div>
      <div className='header'>
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
      {String(props.monster.ac).split(' ')[0]}
      </div>
      <div className='header'>
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
      {String(props.monster.hp).split(' ')[0]}
      </div>
      <div className='header'><p className='level'>{props.monster.level}</p></div>
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
      <a href={props.monster.link} className='fg-light'>Link</a>
      <p className=''>{props.monster.text}</p>
  </div>
  </div>
  )
}