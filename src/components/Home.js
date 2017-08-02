import React from 'react';
import ReactDOM from 'react-dom';

import Epithet from './Epithet';
import Salutation from './Salutation';

class Home extends React.Component {
  render () {
    return (
      <div>
        <Epithet />
        <Salutation />
      </div>
    );
  }
}

export default Home;
