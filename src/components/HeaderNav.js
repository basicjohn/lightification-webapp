import React from 'react';

import { Link, BrowserRouter as Router } from 'react-router-dom';


function HeaderNav(props) {

  return (
    <nav className="navbar navbar-default"> 
      <Router>
        <Link to='/' className="navbar-brand">Home</Link>
        <Link to='/about' className="navbar-brand">About</Link>
        <Link to='/login' className="navbar-brand">Login</Link>
        <Link to='/logout' className="navbar-brand">Logout</Link>
      </Router>
    </nav>
  )
}

export default HeaderNav;