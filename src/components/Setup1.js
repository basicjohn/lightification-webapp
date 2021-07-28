// Page to get Philips Hue Permissions from meethue.com
import React, { Component } from 'react';
import { propTypes } from 'prop-types';
import { useSelector } from 'react-redux';


function Setup1(props) {
  
  const profileSettings = useSelector((state) => state.baseInfo);

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
    fetch(`http://${profileSettings.hubIp}/api/${profileSettings.username}/lights`)
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




    getAllLightsInfo()


  // convertLightsToArray = () => {
  //   const { lights } = this.state;
  //   for (const [key, value] of Object.entries(lights)) {
  //     console.log(`${key}: ${value}`);
  //   }
  // }
  // propTypes: {
  //   lights: React.PropTypes.array.isRequired
  // }


    const { error, isLoaded, lights } = profileSettings;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
          <div className="row">
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
        </div>
      );
    }
}



export default Setup1;