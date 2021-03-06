/* global window */
import React from 'react';

class GoingButton extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    window.loginSuccess = this.props.handleLogin;
    const url = '/login';
    const name = 'Github Login';
    const specs = 'width=600,height=600';
    window.open(url, name, specs);
  }
  render() {
    const activeClass = (this.props.going > 0) ? ' active' : '';
    const button = (!this.props.loggedIn) ? <a onClick={this.handleClick} className={`button poiGoingButton${activeClass}`} href="/login">{this.props.going}</a>
                : <button className={`poiGoingButton${activeClass}`} onClick={() => this.props.handleGoingClick(this.props.id, this.props.goingArr)} >{this.props.going}</button>;
    return (
      button
    );
  }
}

GoingButton.propTypes = {
  handleLogin: React.PropTypes.func.isRequired,
  loggedIn: React.PropTypes.bool.isRequired,
  going: React.PropTypes.number.isRequired,
  goingArr: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  handleGoingClick: React.PropTypes.func.isRequired,
  id: React.PropTypes.string.isRequired,
};

export default GoingButton;
