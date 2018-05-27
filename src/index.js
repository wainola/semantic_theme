import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './assets/semantic.material.min.css'
import {
  createStore,
  applyMiddleware
} from 'redux'
import {
  Provider
} from 'react-redux'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
