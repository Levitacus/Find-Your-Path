import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
//import { LinkContainer } from 'react-router-bootstrap';
import Link from 'react-router-dom/Link';
/*
const React = require('react');
const Link = require('react-router-dom').Link;
*/
export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect variant='dark' expand='lg'>
          <Navbar.Brand>
            <Link to='/Find-Your-Path'><NavItem>Find Your Path</NavItem></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Link to='/monsters/'><NavItem>Encounter Builder</NavItem></Link>
            </Nav>
            <Nav pullRight>
              <ProfileNav loggedIn={false} className='profile-nav'/>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

const ProfileNav = props => {
  if(props.loggedIn === true) {
    return (
      <div className={props.className}>
      <Link to='/users/profile/:username'>
        <NavItem>Profile</NavItem>
      </Link>
      </div>
    )
  }
  else {
    return (
      <div className={props.className}>
        <Link to='/users/register'>
          <NavItem>Register</NavItem>
        </Link>
        <Link to='/users/login'>
          <NavItem>Log In</NavItem>
        </Link>
      </div>
    )
  }
}

//module.exports = Navbar;