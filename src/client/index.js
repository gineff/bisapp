/**
 * Created by Andrey on 01.07.2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../common/store/configureStore.clinet';
import routes from '../common/routes';

const initialState = {};
const store = configureStore(initialState);
const rootElement = document.getElementById('react');


ReactDOM.render(
  <Provider store={store}>
    <div style={{height: '100%'}}>
      <Router children={routes} history={browserHistory} />
    </div>
  </Provider>,
  rootElement
);
