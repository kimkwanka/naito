import React from 'react';

class GoingButton extends React.Component {
  handleClick = () => {
    console.log('Cluck', this.props.loggedIn);
  }
  render() {
    const button = (!this.props.loggedIn) ? <a className="button poiGoingButton" href="/login">{this.props.going}</a>
                : <button className="poiGoingButton" onClick={this.handleClick} >{this.props.going}</button>;
    return (
      button
    );
  }
}

GoingButton.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  going: React.PropTypes.number.isRequired,
};

export default GoingButton;
