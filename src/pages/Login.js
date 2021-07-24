import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import config from '../config.json';
import { withRouter, Redirect } from 'react-router-dom';

class Login extends Component {

  onFailure = (error) => {
    alert(error);
  };

  googleResponse = (response) => {
    const tokenBlob = new Blob([JSON.stringify({ tokenId: response.tokenId }, null, 2)], { type: 'application/json' });
    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
  };
  fetch(config.GOOGLE_AUTH_CALLBACK_URL, options)
    .then(r => {
      r.json().then(user => {
        const token = user.token;
        console.log(token);
        this.props.login(token);
      });
    })
  };


  
}