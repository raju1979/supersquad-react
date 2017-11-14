import React from 'react';
import ReactDOM from 'react-dom';

import rootReducer from './reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux'

import {addCharacterById} from "./actions";

import App from './components/App';

const store = createStore(rootReducer);
console.log('store.getState()',store.getState())

store.subscribe(() => console.log('store',store.getState()));
// store.dispatch(addCharacterById(2));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
