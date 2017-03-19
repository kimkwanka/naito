/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import LoginButton from './LoginButton';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <h1 className="headerLogo">naito</h1>
          <LoginButton loggedIn={this.props.loggedIn} />
        </div>
      </header>
    );
  }
}
export default Header;
