import React, { Component } from 'react';
import PropTypes from 'prop-types'
import HeaderNav from './HeaderNav';

function Header(props) {
  return (
    <header>
      <img src={props.logo} alt="logo" />
      <HeaderNav />
    </header>
  )
}

export default Header;