import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';

import reducer from './reducers';

import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

// Step 1: create the store
const store = createStore(reducer);



// Step 2: Provide the Store
ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App />
    </Router>,
  </Provider>,  
  document.getElementById('root')
);
