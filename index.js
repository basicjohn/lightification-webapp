import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import store from "./src/store";
import './cssReset.css';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// import middlewareApi from './src/middleware/middleware-api';
// import thunkMiddleware from 'redux-thunk';

import registerServiceWorker from './src/registerServiceWorker';


ReactDOM.render(
  <Provider store={store}>
      <Router>
          <App />
      </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { Provider } from "react-redux";
// import store from "./src/store";
// import registerServiceWorker from './src/registerServiceWorker';
// import { BrowserRouter as Router } from 'react-router-dom';


// ReactDOM.render(
//     <Provider store={store}>
//         <Router>
//             <App />
//         </Router>
//     </Provider>,
//     document.getElementById('root'));
// registerServiceWorker();
