import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import quoteApp from './reducers/index'
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(quoteApp, composeWithDevTools(applyMiddleware(thunk)));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store = {store} ><App /></Provider>, div);
});