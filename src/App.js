import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,
  Route, browserHistory
 } from 'react-router-dom';

 import Nav from './components/Nav';
 import Home from './components/Home';
 import About from './components/About';
 import Projects from './components/Projects';
 import Contact from './components/Contact';

  ReactDOM.render(
    <Router history={browserHistory} >
      <div>
        <Nav />
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contact" component={Contact}/>
      </div>
    </Router>,
    document.getElementById('app')
  )
