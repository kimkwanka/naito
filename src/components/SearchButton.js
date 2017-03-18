/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';

class SearchButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.handleClick}>Search</button>
    );
  }
}
export default SearchButton;
