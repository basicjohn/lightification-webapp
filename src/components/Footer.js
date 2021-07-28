import React, { Component } from 'react';
import './Footer.css';



function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col-md-4">Lightification</div>
        <div className="col-md-4">
          <h2>Resources</h2>
          <a href="#">Philips Hue</a><br />
          <a href="#">unSplash</a>
        </div>
        <div className="col-md-4">Phasellus tellus ex, ultrices sit amet fermentum nec, auctor id mi. Aliquam metus metus, imperdiet vitae massa ut, pretium mattis neque. Mauris ultrices risus eu ante lacinia, sed posuere ipsum finibus. Nunc nisl turpis, vestibulum non arcu id, interdum sollicitudin magna. Pellentesque a lacus a orci scelerisque condimentum. Phasellus eu odio tempor, efficitur nibh eget, consequat dui.</div>
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