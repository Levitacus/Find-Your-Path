import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component';
import RegisterUser from './components/registerUser.component';
import Login from './components/login.component';
import EncounterBuilder from './components/encounterBuilder.component';
import Profile from './components/profile.component';
import HomePage from './components/homePage.component';
/*
const React = require('react');
const Router = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;
require('bootstrap/dist/css/bootstrap.min.css');

const Navbar = require('./components/navbar.component');
const RegisterUser = require('./components/registerUser.component');
const Login = require('./components/login.component');
const EncounterBuilder = require('./components/encounterBuilder.component');
const Profile = require('./components/profile.component');
*/

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container-fluid'>
          <Navbar />
          <br/>
          <Route path='/' exact component={HomePage} />
          <Route path='/monsters' exact component={EncounterBuilder} />
          <Route path='/users/register' component={RegisterUser} />
          <Route path='/users/login' component={Login} />
          <Route path='/users/profile/:username' component={Profile} />
        </div>
      </Router>
    )
  }
}

//module.exports = App;