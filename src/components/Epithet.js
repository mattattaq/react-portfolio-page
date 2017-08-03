import React from 'react';
import ReactDOM from 'react-dom';
import SocialLinks from './SocialLinks';

class Epithet extends React.Component {
  render() {
    return (
      <div>
        <h1>Mark McConnell</h1>
        <h3>Frontend Web Developer</h3>
        <SocialLinks />
      </div>
    );
  }
}

export default Epithet;
