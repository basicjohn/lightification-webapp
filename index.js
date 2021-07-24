import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';

import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from "./store";
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <Provider store={store}>
      <Router>
          <App />
      </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
registerRootComponent(App);
