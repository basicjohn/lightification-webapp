import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './HeaderNav.css';



function HeaderNav(props) {

  const auth  = useSelector((state) => state.auth);

  if (auth.isAuthenticated) {
    return (
      <nav className="navbar navbar-default">
        <Router>
          <Link to='/' className="navbar-brand">Home</Link>
          <Link to='/about' className="navbar-brand">About</Link>
          <Link to='/profile' className="navbar-brand">Profile</Link>
          <Link to='/logout' className="navbar-brand">Logout</Link>
          <Link to='/login' className="navbar-brand">Sign Up / Login</Link> {/* Temp */}

          <span className="navbar-brand">Welcome Back!</span>
        </Router>
      </nav>
    )
  } else {
      return (
        <nav className="navbar navbar-default">
          <Router>
            <Link to='/' className="navbar-brand">Home</Link>
            <Link to='/about' className="navbar-brand">About</Link>
            <Link to='/profile' className="navbar-brand">Profile</Link> {/* Temp */}
            <Link to='/logout' className="navbar-brand">Logout</Link>  {/* Temp */}
            <Link to='/login' className="navbar-brand">Sign Up / Login</Link>
          </Router>
        </nav>
      )
    }
}

export default HeaderNav;