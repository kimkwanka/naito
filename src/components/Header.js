import React from 'react';
import LoginButton from './LoginButton';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <h1 className="headerLogo">naito</h1>
          <LoginButton handleLogin={this.props.handleLogin} loggedIn={this.props.loggedIn} />
        </div>
      </header>
    );
  }
}
Header.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  handleLogin: React.PropTypes.func.isRequired,
};
export default Header;
