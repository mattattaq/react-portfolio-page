import React from 'react';
import ReactDOM from 'react-dom';

class SocialLinks extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <a href="mailto:mcmcconn@gmail.com">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/korrollir">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mark-mcconnell-msw-lcsw-03656b17/">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    );
  }
}

export default SocialLinks;
