import React from "react";

function Home(props) {

  return(
    <div>
      <div className="jumbotron">
        <h1>Lightification <span>w/ Philips Hue</span></h1>
        <h2>Respect your focus using predictable minimalist notifications</h2>
        <h3>Distract Less</h3>
        <button>Get Started</button>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h4>Features</h4>
        </div>
        <div className="col-md-6">
          <div className="col-md-12">
            <img src="" alt="" />
            <p>Connect to your Philips Hue Bridge locally or connect to the Hue website to setup remote scheduling</p>
          </div>
          <div className="col-md-12">
            <img src="" alt="" />
            <p>Connect to your Philips Hue Bridge locally or connect to the Hue website to setup remote scheduling</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="col-md-12">
            <img src="" alt="" />
            <p>With a variety of notification options </p>
          </div>
          <div className="col-md-12">
            <img src="" alt="" />
            <p>Connect to your Philips Hue Bridge locally or connect to the Hue website to setup remote scheduling</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;