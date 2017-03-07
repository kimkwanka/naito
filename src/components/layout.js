/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { IndexLink, Link } from 'react-router';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <main>
          <ul>
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/dashboard" activeClassName="active">Dashboard</Link></li>
          </ul>
          {this.props.children}
        </main>
      </div>
    );
  }
}
Layout.propTypes = {
  children: React.PropTypes.node,
};
Layout.defaultProps = () => ({ children: null });

export default Layout;
