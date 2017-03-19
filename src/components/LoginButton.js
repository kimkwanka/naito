/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';

class LoginButton extends React.Component {
  handleClick = () => {
    console.log('Cluck', this.props.loggedIn);
  }
  render() {
    const button = (!this.props.loggedIn) ? <a className="button loginButton" href="/login">Sign in with Github</a>
                : <a className="button loginButton" href="/logout">Logout</a>;
    return (
      button
    );
  }
}
export default LoginButton;
