/* global window */
import React from 'react';
import SearchButton from './SearchButton';

class Hero extends React.Component {
  static instance = null;
  static flyUp() {
    if (Hero.instance) {
      Hero.instance.flyUp();
    }
  }
  constructor() {
    super();
    Hero.instance = this;
    this.isInCenter = true;
    this.heroCenterClass = 'searchHeroCenter';
  }
  flyUp() {
    if (this.isInCenter) {
      this.heroCenterClass = 'searchHeroCenter heroFlyUp';
      this.forceUpdate();
      this.isInCenter = false;
    }
  }
  render() {
    return (
      <div className="searchHero">
        <div className={this.heroCenterClass}>
          <h1 className="heroTitle"><span>na</span><span>i</span><span>to</span></h1>
          <h3 className="heroSubTitle"><span> Find awesome bars in your area and see who will be there to</span><span>na</span><span>i</span><span>to</span><span>!</span></h3>
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
