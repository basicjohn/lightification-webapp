// Page that lists all available Lights for you to choose from.
// import env from './../config.json'
import React, { Component } from 'react';
import { propTypes } from 'prop-types';

class Setup1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      hubIp: '192.168.86.168',
      username: 'GdKr5N2NQtBnaknaysdCMHNwTojvh7wcHuMG0Yy2',
      selectedLight: null,
      lights: []
    };
    this.getHubUsername = this.getHubUsername.bind(this);
  }
  

  getHubUsername = () => {
    fetch(`https://${this.state.hubIp}/api/newdeveloper`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          this.setState({
            isLoaded: true,
            username: jsonifiedResponse.results[0].success[0].username
          });
        })
        .catch((error) => {
          this.setState({
            isLoaded: true,
            error 
          });
        });
  }


  // getAllLightsInfo = () => {
  //   fetch(`http://${this.state.hubIp}/api/${this.state.username}/lights`)
  //     .then(response => response.json())
  //     .then(
  //       (jsonifiedResponse) => {
  //         console.log(jsonifiedResponse);
  //         let arr = [];
  //         for (const [key, object] of Object.entries(jsonifiedResponse)) {
  //           let nestedArr = [];
  //           nestedArr.push(parseInt(key));
  //           nestedArr.push(object.name);
  //           nestedArr.push(object.productname);
  //           nestedArr.push(object.type);
  //           arr.push(nestedArr);
  //         }
  //         console.log(arr);
  //         this.setState({
  //           isLoaded: true,
  //           lights: arr
  //         });
  //       })
  //       .catch((error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error 
  //         });
  //       });
  //   }

  //   alertSelectedLight = (lightId) => {
  //     fetch(`http://${this.state.hubIp}/api/${this.state.username}/lights/${lightId}/state`, {
  //       method: 'PUT',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         "on": true,
  //         "alert": "select"
  //       })
  //     })
  //     .then(response => response.json())
  //     .then(
  //       (jsonifiedResponse) => {
  //         console.log(jsonifiedResponse);
  //         this.setState({
  //           isLoaded: true,
  //           selectedLight: lightId
  //         });
  //       })
  //       .catch((error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     );
  //   }



  // componentDidMount() {
  //   this.getAllLightsInfo()
  // }


  // convertLightsToArray = () => {
  //   const { lights } = this.state;
  //   for (const [key, value] of Object.entries(lights)) {
  //     console.log(`${key}: ${value}`);
  //   }
  // }
  // propTypes: {
  //   lights: React.PropTypes.array.isRequired
  // }

  render() {

      return (
        <div className="row">
            <div className="col-md-6">
              <h1>Step 1</h1>
              <h2>Connect to your Philips Hue Hub</h2>
            </div>
            <div className="col-md-6">
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
                <form onSubmit={this.handleSubmit}>
                  <input type="text" value="hubIp" />
                  <button type="submit">Submit</button>
                </form>
              </div>
          </div>
        </div>
      );
    
  }
}
export default Setup1;