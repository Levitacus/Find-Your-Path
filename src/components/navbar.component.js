import React from 'react';
import { Link } from 'react-router-dom';
/*
const React = require('react');
const Link = require('react-router-dom').Link;
*/
export default class Navbar extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark navbar-custom'>
        <Link to='/' className='navbar-brand'>Find Your Path</Link>
        <ul className='navbar-nav mr-auto navbar-left'>
          <li className='navbar-item'>
          <Link to='/monsters/' className='nav_link'>Encounter Builder</Link>
          </li>
        </ul>

        <Profile loggedIn={false} />
      </nav>
    )
  }
}

const Profile = props => {
  if(props.loggedIn === true) {
    return (
      <ul className='navbar-nav navbar-left'>
      <li className='navbar-item'>
          <Link to='/users/profile/:username' className='nav_link'>Profile</Link>
      </li>
      </ul>
    )
  }
  else {
    return (
      <ul className='navbar-nav navbar-right'>
        <li className='navbar-item'>
            <Link to='/users/register' className='nav_link'>Register</Link>
        </li>
        <li className='navbar-item'>
        <Link to='/users/login' className='nav_link'>Log In</Link>
        </li>
      </ul>
    )
  }
}

//module.exports = Navbar;