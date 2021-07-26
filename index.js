import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './App';
import middlewareApi from './src/middleware/middleware-api';
import thunkMiddleware from 'redux-thunk';

import './index.css';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  // reducer,
  applyMiddleware(middlewareApi, thunkMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
      <Router>
          <App />
      </Router>
  </Provider>,
  document.getElementById('root'));
registerRootComponent(App);

