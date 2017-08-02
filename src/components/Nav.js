import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {

  render() {
    return (
      <div>
        <h2>Mark McConnell</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}

export default Nav;
