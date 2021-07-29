import React from "react";
import { Link, BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { FaRegLightbulb } from 'react-icons/fa';
import { RiNotification3Line } from 'react-icons/ri';
import { GrScheduleNew, GrConnect } from 'react-icons/gr';

// import { VscDebugDisconnect } from 'react-icons/vcs';
import './Home.css';


function Home(props) {

  return(
    <div>
      <div className="jumbotron">
        <h1>Lightification<br /><span>w/ Philips Hue</span></h1>
        <h2>Respect your focus by using<br />predictable minimalist notifications</h2>
        <h3>-<br/>Distract Less</h3>
        <Link to='/setup1' className="btn btn-primary">Get Started</Link>
      </div>
      <div className="row features">
        <div className="col-md-12">
          <h4>Features</h4>
        </div>
        <div className="row">
          <div className="col-md-6 feature">
            <div>
              <GrConnect size={75} />
            </div>
            <p>Connect to your Philips Hue Bridge locally or connect remotely to the Philips Hue api.</p>
          </div>
          <div className="col-md-6 feature">
            <div>
              <GrScheduleNew size={75} />
            </div>
            <p>Get notified at the top of the hour or at transition points during the workday.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 feature">
            <div>
              <RiNotification3Line size={75} />
            </div>
            <p>With a variety of notification options, select what you prefer that causes minimal disruption.</p>
          </div>
          <div className="col-md-6 feature">
            <div>
              <FaRegLightbulb size={75} />
            </div>
            <p>Coming Soon: Connect Google Calendar with Lightification to notify you when you have an event from a specific calendar on a given day.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

