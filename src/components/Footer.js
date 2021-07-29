import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';



function Footer() {
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
              <a href="https://meethue.com">Philips Hue</a><br />
            </li>
            <li>
              <a href="https://unsplash.com/">unSplash</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h2>About</h2>
          <ul>
            <li>
              <a href="https://meethue.com">Philips Hue</a><br />
            </li>
            <li>
              <a href="https://unsplash.com/">unSplash</a>
            </li>
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
  );
}
export default Footer;