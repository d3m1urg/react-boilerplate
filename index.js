import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import App from './app';

render((
  <Router history={hashHistory}>
    <Router path="/" component={App} />
  </Router>
), document.querySelector('#application'));
