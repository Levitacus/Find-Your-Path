import React from 'react';
import Axios from 'axios';

//const React = require('react');
//const Axios = require('axios');
export default class RegisterUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }

  componentDidMount() {
    //Will automatically be called before rendered to page
    
  }

  onChangeUsername(username) {
    this.setState({
      username: username
    });
  }

  onChangePassword(password) {
    this.setState({
      password: password
    });
  }

  onChangeEmail(email) {
    this.setState({
      email: email
    });
  }

  onSubmit(e) {
    const user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }

    e.preventDefault();
    console.log(user);
    Axios.post('http://localhost:3000/user/register', user)
      .then(res => console.log(res.data));
    //window.location = '/';
  }

  render() {
    return (
    <div className='signup-sm centered bg-dark fg-light'>
      <p className='h4 mb-4 text-center'>Register New User</p>
      <form className='border border-light p-3'onSubmit={(e) => this.onSubmit(e)}>
        <div className='form-group'>
          <input type='text'
            className='form-control mb-4'
            value={this.state.username}
            onChange={(e) => this.onChangeUsername(e.currentTarget.value)}
            placeholder='Username'>
          </input>
          <input type='text'
            className='form-control mb-4'
            value={this.state.password}
            onChange={(e) => this.onChangePassword(e.currentTarget.value)}
            placeholder='Password'>
          </input>
          <input type='text'
            className='form-control mb-4'
            value={this.state.email}
            onChange={(e) => this.onChangeEmail(e.currentTarget.value)}
            placeholder='Email Address'>
          </input>
          <input type='submit'
            className='btn btn-primary'
            value='Submit'>
          </input>
        </div>
      </form>
    </div>
    )
  }
}

//module.exports = RegisterUser;