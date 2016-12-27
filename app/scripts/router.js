import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import Login from './Components/Login';
// import config from './config';

export default(

  <Router history = {hashHistory}>
      <Route path='/' component={Login} />
    
  </Router>
);
