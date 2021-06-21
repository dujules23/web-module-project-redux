import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';

// imported rootReducer then passed it into the store
import { rootReducer } from './reducers';

import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

// Step 1: create the store
const store = createStore(rootReducer);



// Step 2: Provide the Store
ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App />
    </Router>,
  </Provider>,  
  document.getElementById('root')
);
