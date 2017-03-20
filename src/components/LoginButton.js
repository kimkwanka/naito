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
LoginButton.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
};
export default LoginButton;
