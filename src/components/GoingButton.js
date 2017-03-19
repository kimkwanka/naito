/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
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
export default GoingButton;
