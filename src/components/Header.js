import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from './HeaderNav';
import './Header.css';


function Header(props) {

  return (
      <header className="header flex-row">
        <div className="container">
          <h1><Link to='/'>Lightification</Link></h1>
          <HeaderNav authentication={props}/>
        </div>
      </header>
  )}

export default Header;