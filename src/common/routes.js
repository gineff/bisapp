import { Redirect, Router, Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './containers/App';
import WelcomePage from './components/WelcomePage';
import SignIn from './components/SignIn';
import Invoices from './containers/Invoices';

console.log(WelcomePage)

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Invoices} />
    <Route path="/invoice" component={Invoices} />
  </Route>
  
);

export default Routes;


