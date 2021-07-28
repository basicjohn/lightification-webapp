// import React, { Component } from 'react';
// import { Route, Switch } from "react-router-dom";
// import Header from "./src/components/Header";
// import Home from "./src/pages/Home";
// import Login from "./src/pages/Login";
// import Logout from "./src/pages/Logout";

// const About = () => (
//   <div><h1>About</h1></div>
// )

// const NotFound = () => (
//   <div><h1>NotFound</h1></div>
// )

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <main role="main" className="container">
//           <Switch>
//             <Route exact path='/' component={Home} />
//             <Route path='/about' component={About} />
//             <Route path='/login' component={Login} />
//             <Route path='/logout' component={Logout} />
//             <Route component={NotFound} />
//           </Switch>
//         </main>
//       </div>
//     );
//   }
// }

// export default App;


import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Route, Switch, BrowserRouter as Router } from  "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
// import Register from "./src/pages/Register";
import Profile from "./src/pages/Profile";
import Setup from "./src/pages/Setup";
import Logout from "./src/pages/Logout";
import About from "./src/pages/About";
import NotFound from "./src/pages/NotFound";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      selectedLight: null,
      lights: [],
      isAuthenticated: false
    }
  }

  render() {
    return (
        <div className="container">
          <Header authentication={this.state.isAuthenticated}/>
          <main>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profile} />
                <Route path="/setup" component={Setup} />
                <Route path="/logout" component={Logout} />
                <Route component={NotFound} />
              </Switch>
            </Router>
          </main>
          <Footer />
        </div>
    );
  }
}

export default App;