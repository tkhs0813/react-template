import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';

import './tailwind.css';

ReactDom.render(
  <Router>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/about" component={About}></Route>
  </Router>,
  document.getElementById('root')
);
