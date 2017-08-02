import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, IndexRoute } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


ReactDOM.render((
  <BrowserRouter>
    <div>
        <IndexRoute component={ Home } />
        <Route exact path='/About' component={ About } />
        <Route exact path='/Projects' component={ Projects } />
        <Route exact path='/Contact' component={ Contact } />
        <Route path='*' component={ Home } />
    </div>
  </BrowserRouter>
  )
, document.getElementById('app'));
