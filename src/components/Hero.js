/* global window */
import React from 'react';
import SearchButton from './SearchButton';

class Hero extends React.Component {
  render() {
    return (
      <div className="searchHero">
        <div className="searchHeroCenter">
          <h1 className="heroTitle">naito</h1>
          <h3 className="heroSubTitle">Find awesome bars in your area and see how many party people will be there.</h3>
          <div className="searchBarOuter">
            <input className="searchBar" onChange={this.props.handleChange} onKeyPress={this.props.handleKeyPress} type="text" placeholder="Enter your location" value={this.props.searchTerm} />
            <SearchButton handleClick={this.props.searchAPI} searchTerm={this.props.searchTerm} />
          </div>
        </div>
      </div>
    );
  }
}

Hero.propTypes = {
  handleKeyPress: React.PropTypes.func.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  searchAPI: React.PropTypes.func.isRequired,
  searchTerm: React.PropTypes.string.isRequired,
};

export default Hero;
