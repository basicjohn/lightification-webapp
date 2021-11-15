import React, { Component } from 'react';
import { render } from "react-dom";

// import Setup1 from "./Setup1";
import Setup2 from "./Setup2";
// import Setup3 from "./Setup3";
// import SetupComplete from "../components/SetupComplete";


class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
    <div>
      <Setup2 />
    </div>);
  };

}

export default Setup;