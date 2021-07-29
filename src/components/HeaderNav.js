import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './HeaderNav.css';



function HeaderNav(props) {

  const auth  = useSelector((state) => state.auth);

  if (auth.isAuthenticated) {
    return (
      <nav className="navbar navbar-default">
          <Link to='/' className="navbar-brand">Home</Link>
          <Link to='/about' className="navbar-brand">About</Link>
          <Link to='/profile' className="navbar-brand">Profile</Link>
          <Link to='/logout' className="navbar-brand">Logout</Link>

          <span className="navbar-brand">Welcome Back!</span>
      </nav>
    )
  } else {
      return (
        <nav className="navbar navbar-default">
            <Link to='/'  className="navbar-brand">Home</Link>
            <Link to='/about' className="navbar-brand">About</Link>
            <Link to='/login' className="navbar-brand">Sign Up / Login</Link>
        </nav>
      )
    }
}

export default withRouter(HeaderNav);