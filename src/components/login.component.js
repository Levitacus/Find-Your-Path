import React from 'react';
import Axios from 'axios';
/*
const React = require('react');
const Axios = require('axios');
*/
export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isChecked: false
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

  onCheck() {
    this.setState({
      isChecked: !this.state.isChecked
    });
  }

  onSubmit(e) {
    const user = {
      username: this.state.username,
      password: this.state.password
    }

    // TODO something with the isChecked value too

    e.preventDefault();
    console.log(user);
    Axios.post('http://localhost:3000/user/register', user)
      .then(res => console.log(res.data));
    //window.location = '/';
  }

  render() {
    return (
    <div className='signup-sm centered bg-dark fg-light'>
      <p className='h4 mb-4 text-center'>Login</p>
      <form className='border border-light p-3'onSubmit={(e) => this.onSubmit(e)}>
        <div className='form-group'>
          <input type='text'
            className='form-control mb-4'
            placeholder='Username'
            value={this.state.username}
            onChange={(e) => this.onChangeUsername(e.currentTarget.value)}>
          </input>
          <input type='text'
            className='form-control mb-4'
            placeholder='Password'
            value={this.state.password}
            onChange={(e) => this.onChangePassword(e.currentTarget.value)}>
          </input>
          <div className="form-check form-group">
            <input type="checkbox"
             className="form-check-input" 
             id="rememberMe"
             onClick={() => this.onCheck()}/>
            <label className="form-check-label" htmlFor="rememberMe">
              Remember Me
            </label>
          </div>
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

//module.exports = Login;