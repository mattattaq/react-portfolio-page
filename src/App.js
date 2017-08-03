import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,
  Route, Link, browserHistory
 } from 'react-router-dom';
 import Home from './components/Home';
 import About from './components/About';
  ReactDOM.render(
    <Router history={browserHistory} >
      <div>
        {/*load navBar here*/}
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <hr/>
      
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      </div>
    </Router>,
    document.getElementById('app')
  )

export default App;