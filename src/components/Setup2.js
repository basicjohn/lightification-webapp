// Page that lists all available Lights for you to choose from.
// import env from './../config.json'
import React, { Component } from 'react';
import { propTypes } from 'prop-types';

class Setup2 extends Component {
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
  }

  // getHubUsername = () => {
  //   fetch(`https://${this.state.hubIp}/api/newdeveloper`)
  //     .then(response => response.json())
  //     .then(
  //       (jsonifiedResponse) => {
  //         this.setState({
  //           isLoaded: true,
  //           username: jsonifiedResponse.results[0].success[0].username
  //         });
  //       })
  //       .catch((error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error 
  //         });
  //       });
  // }


  getAllLightsInfo = () => {
    fetch(`http://${this.state.hubIp}/api/${this.state.username}/lights`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          console.log(jsonifiedResponse);
          let arr = [];
          for (const [key, object] of Object.entries(jsonifiedResponse)) {
            let nestedArr = [];
            nestedArr.push(parseInt(key));
            nestedArr.push(object.name);
            nestedArr.push(object.productname);
            nestedArr.push(object.type);
            arr.push(nestedArr);
          }
          console.log(arr);
          this.setState({
            isLoaded: true,
            lights: arr
          });
        })
        .catch((error) => {
          this.setState({
            isLoaded: true,
            error 
          });
        });
  }


  // getSelectedLightInfo = () => {
  //   fetch(`https://${this.state.hubIp}/api/${this.state.username}/lights`)
  //     .then(response => response.json())
  //     .then(
  //       (jsonifiedResponse) => {
  //         this.setState({
  //           isLoaded: true,
  //           username: jsonifiedResponse.results[0].success[0].username
  //         });
  //       })
  //       .catch((error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error 
  //         });
  //       });
  // }



  componentDidMount() {
    this.getAllLightsInfo()
  }


  convertLightsToArray = () => {
    const { lights } = this.state;
    for (const [key, value] of Object.entries(lights)) {
      console.log(`${key}: ${value}`);
    }
  }
  // propTypes: {
  //   lights: React.PropTypes.array.isRequired
  // }

  render() {
    const { error, isLoaded, lights } = this.state;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>All Lights</h1>
          <ul>
            {lights.map((light, index) =>
              <li key={index}>
                <h3>{light[1]}</h3>
                <h4>{light[2]}</h4>
                <h5>{light[3]}</h5>
                <button>Select Light</button>
              </li>
    )}
          </ul>
        </React.Fragment>
      );
    }
  }
}



export default Setup2;