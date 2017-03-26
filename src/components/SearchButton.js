import React from 'react';

class SearchButton extends React.Component {
  render() {
    return (
      <button className="searchButton" onClick={this.props.handleClick}><div className="searchIcon" /></button>
    );
  }
}

SearchButton.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
};

export default SearchButton;
