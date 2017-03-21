import React from 'react';

class GoingButton extends React.Component {
  render() {
    const button = (!this.props.loggedIn) ? <a className="button poiGoingButton" href="/login">{this.props.going}</a>
                : <button className="poiGoingButton" onClick={() => this.props.handleGoingClick(this.props.id)} >{this.props.going}</button>;
    return (
      button
    );
  }
}

GoingButton.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  going: React.PropTypes.number.isRequired,
  handleGoingClick: React.PropTypes.func.isRequired,
  id: React.PropTypes.string.isRequired,
};

export default GoingButton;
