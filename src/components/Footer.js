import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Footer.css';



function Footer() {


  const auth  = useSelector((state) => state.auth);



  if (auth.isAuthenticated) {
    return (
      <footer>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <h1 className="brand"><Link to='/'>Lightification<br /><span>W/ Philips Hue</span></Link></h1>
        </div>
        <div className="col-md-4">
          <h2>Resources</h2>
          <ul>
            <li>
              <a href="https://meethue.com">Philips Hue</a>
            </li>
            <li>
              <a href="https://unsplash.com/">unSplash</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h2>Links</h2>

        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about' >About</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          <li><Link to='/logout'>Logout</Link></li>
        </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="recognition">
            <p>Created by John Edmondson</p>
          </div>
        </div>
      </div>
    </footer>
    )
  } else {
      return (
        <footer>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <h1 className="brand"><Link to='/'>Lightification<br /><span>W/ Philips Hue</span></Link></h1>
          </div>
          <div className="col-md-4">
            <h2>Resources</h2>
            <ul>
              <li>
                <a href="https://meethue.com">Philips Hue</a>
              </li>
              <li>
                <a href="https://unsplash.com/">unSplash</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h2>Links</h2>  
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/login'>Sign Up / Login</Link></li>
        </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="recognition">
            <p>Created by John Edmondson</p>
          </div>
        </div>
      </div>
    </footer>
      )
    }
}
export default Footer;


