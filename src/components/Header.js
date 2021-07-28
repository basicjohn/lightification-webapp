import React, { Component } from 'react';
import PropTypes from 'prop-types'
import HeaderNav from './HeaderNav';
import './Header.css';


function Header(props) {

  return (
      <header className="header flex-row">
        <div className="container">
          <h1><img className="logo" src="" alt="logo" />Lightification</h1>
          <HeaderNav authentication={props}/>
        </div>
      </header>
  )}

export default Header;