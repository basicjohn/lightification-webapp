import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Route, Switch, BrowserRouter as Router } from  "react-router-dom";
import HeaderNav from "./src/components/HeaderNav";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
// import Register from "./src/pages/Register";
import Profile from "./src/pages/Profile";
import Logout from "./src/pages/Logout";
import About from "./src/pages/About";
import NotFound from "./src/pages/NotFound";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuthenticated: false
    }
  }

  render() {
    return (
      // <View style={styles.container}>
      <View>
        <StatusBar backgroundColor="rgba(0,0,0,0.2)" barStyle="light-content" />
        <HeaderNav />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            {/* <Route path="/register" component={Register} /> */}
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/logout" component={Logout} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </View>
    );
  }
}

export default App;