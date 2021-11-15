// Page that lists all available Lights for you to choose from.
// import env from './../config.json'
import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

// import { propTypes } from 'prop-types';
import './Setup2.css';


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
    this.alertSelectedLight = this.alertSelectedLight.bind(this);
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

    alertSelectedLight = (lightId) => {
      fetch(`http://${this.state.hubIp}/api/${this.state.username}/lights/${lightId}/state`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "on": true,
          "alert": "select"
        })
      })
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          console.log(jsonifiedResponse);
          this.setState({
            isLoaded: true,
            selectedLight: lightId
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
        <div className="row">
            <div className="col-md-6 setup2-side1">
              <h1>Step 2</h1>
              <h2>Select a light connected to the bridge</h2>
            </div>
            <div className="col-md-6 setup2-side2">
            {/* <h1>Select a light</h1> */}
            <div className="row">
              {lights.map((light, index) =>
              <div className="col-md-6" key={index}>
                <h3>{light[1]}</h3>
                <h4>{light[2]}</h4>
                <h5>{light[3]}</h5>
                <hr />
                <button className="btn btn-primary" onClick={(e) => this.alertSelectedLight(light[0], e)}>Choose Light</button>
              </div>
              )}
              <br /><br />
              <hr />
              <Link type='button' to='/setup3' className="btn btn-primary">Next Step</Link>

            </div>
          </div>
        </div>
      );
    }
  }
}

export default Setup2;