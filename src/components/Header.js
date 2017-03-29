import React from 'react';
import LoginButton from './LoginButton';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="headerContainer">
          <a href="/"><h1 className="headerLogo"><span>na</span><span>i</span><span>to</span></h1></a>
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
