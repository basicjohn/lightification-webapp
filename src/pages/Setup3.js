// Page that lists all available Lights for you to choose from.
// import env from './../config.json'
import React, { Component } from 'react';
// import { propTypes } from 'prop-types';
import './Setup3.css';
// import { useSelector } from 'react-redux';

class Setup3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      hubIp: '192.168.86.168',
      username: 'GdKr5N2NQtBnaknaysdCMHNwTojvh7wcHuMG0Yy2',
      selectedLight: 19

    };
    this.turnSelectedLightOn = this.turnSelectedLightOn.bind(this);
    this.turnSelectedLightOff = this.turnSelectedLightOff.bind(this);

  }

  turnSelectedLightOn = () => {
    fetch(`http://${this.state.hubIp}/api/${this.state.username}/lights/${this.state.selectedLight}/state`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "on": true,
        "bri": 100,
        "transitiontime": 5
      })
    })
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log(jsonifiedResponse);
        this.setState({
          isLoaded: true,
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error 
        });
      }
    );
  }

  turnSelectedLightOff = () => {
    fetch(`http://${this.state.hubIp}/api/${this.state.username}/lights/${this.state.selectedLight}/state`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "on": false,
        "bri": 0,
        "transitiontime": 0
      })
    })
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log(jsonifiedResponse);
        this.setState({
          isLoaded: true,
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error 
        });
      }
    );
  }

  getSelectedLightInfo() {
    fetch(`http://${this.state.hubIp}/api/${this.state.username}/lights/${this.state.selectedLight}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          console.log(jsonifiedResponse);
          this.setState({
            isLoaded: true,
            lights: jsonifiedResponse
          });
        })
        .catch((error) => {
          this.setState({
            isLoaded: true,
            error 
          });
        });
    }


  componentDidMount() {
    this.getSelectedLightInfo()
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const { error, isLoaded, lights } = this.state;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <div className="row">
            <div className="col-md-6 setup3-side1">
              <h1>Step 3</h1>
              <h2></h2>
              <button className="btn btn-primary" onClick={this.turnSelectedLightOn}>Test Notification</button>
              <button className="btn btn-primary" onClick={this.turnSelectedLightOff}>Turn Light Off</button>
            </div>
            <div className="col-md-6 setup3-side2">
              {/* <h1>All Lights</h1> */}

              <form onSubmit={this.handleSubmit}>
                <h4>Schedule</h4>
                <label>
                <input type="radio"  name="schedule" value="workDay" />
                  Work day (Clock-in, Lunch, and Clock-out)</label><br />
                <label> 
                  <input type="radio"  name="schedule" value="workDay" />
                  Hourly (9am–5pm at the top of every hour)</label><br />

                  <h4>Notification Type</h4>
                  <label>
                  <input type="radio"  name="schedule" value="workDay" />
                    Just Right (aproximately 3s)</label><br />
                    <label>
                  <input type="radio"  name="schedule" value="workDay" />
                    Slow and stead (aproximately 10s)</label><br />
                <label> 
                  <input type="radio"  name="schedule" value="workDay" />
                  Blink and you'll miss it</label><br />

                  <h4>Notification Brightness</h4>
                <label>
                  <input type="radio"  name="schedule" value="workDay" />
                    Dim</label><br />
                    <label> 
                  <input type="radio"  name="schedule" value="workDay" />
                  Just Right</label><br />
                  <label> 
                  <input type="radio"  name="schedule" value="workDay" />
                  Bright</label><br />

                <button className="btn btn-primary" type="submit">Save Settings</button>
              </form>
            </div>
        </div>
      );
    }
  }
}

export default Setup3;