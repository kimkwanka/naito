import React from 'react';

class SearchButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.handleClick}>Search</button>
    );
  }
}

SearchButton.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
};

export default SearchButton;
