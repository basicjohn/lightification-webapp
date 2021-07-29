// Page that lists all available Lights for you to choose from.
// import env from './../config.json'
import React, { Component } from 'react';
import './Setup1.css';

// import { propTypes } from 'prop-types';
// import { v4 } from 'uuid';

class Setup1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      hubIp: '',
      seedName: 'steve',
      username: '',
      selectedLight: null,
    };
    this.getHubUsername = this.getHubUsername.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

    getHubUsername = (e) => {
      e.preventDefault();
      // console.log(deviceInfo);
      fetch(`http://${this.state.hubIp}/api`, {
        method: 'POST',
        body: JSON.stringify({
          "devicetype": `my_hue_app#iphone ${this.state.seedName}`
        })
      })
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          console.log(jsonifiedResponse);
          this.setState({
            isLoaded: true,
            username: jsonifiedResponse[0].success.username
          });
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({hubIp: event.target.value});
  }

  render() {

      return (
        <div className="row">
            <div className="col-md-6 setup1-side1">
              <h1>Step 1</h1>
              <h2>Connect to your Philips Hue Hub</h2>
            </div>
            <div className="col-md-6 setup1-side2">
              <h1>Connect to your Hub</h1>
              <div className="col-md-12">
                <h3>First</h3>
                <p>Find the local ip address of your Hue Bridge. Log into your wireless router and look Philips hue up in the DHCP table.</p>
              </div>
              <div className="col-md-12">
                <h3>Second</h3>
                <p>Press the circle button on the of the hue bridge</p>
              </div>
              <div className="col-md-12">
                <h3>Third</h3>
                <p>Submit the Local network bridge IP address. You may need to press the button on the bridge again if too much time has passed since you last pressed it.</p>
                <form onSubmit={this.getHubUsername}>
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
                  <button type="submit">Submit</button>
                </form>
              </div>
          </div>
        </div>
      );
  }
}
export default Setup1;
