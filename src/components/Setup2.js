// Page that lists all available Lights for you to choose from.
import React, { Component } from 'react';

class Setup2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      selectedLight: null,
      lights: []
    };
  }

  makeApiCall = () => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          this.setState({
            isLoaded: true,
            lights: jsonifiedResponse.results
          });
        })
        .catch((error) => {
          this.setState({
            isLoaded: true,
            error 
          });
        });
  }
  render() {
  
  }
}

export default Setup2;