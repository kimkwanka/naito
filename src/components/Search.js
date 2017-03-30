/* global window */
import React from 'react';
import SearchButton from './SearchButton';
import POI from './POI';

class Search extends React.Component {
  static instance = null;
  static flyUp() {
    if (Search.instance) {
      Search.instance.flyUp();
    }
  }
  constructor() {
    super();
    Search.instance = this;
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
    const poiList = this.props.pois.map((p, i) => {
      const animationDelay = i;
      return <POI animationDelay={animationDelay} id={p.id} loggedIn={this.props.loggedIn} handleLogin={this.props.handleLogin} handleGoingClick={this.props.handleGoingClick} name={p.name} going={p.going} url={p.url} imageUrl={p.imageUrl} snippetText={p.snippetText} address={p.address} />;
    });
    const poiLists = [[], [], []];
    poiList.forEach((p, i) => {
      const index = i % 3;
      poiLists[index].push(p);
    });
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
        <div className="searchResults clearfix" >
          <div className="poiListColumn">{poiLists[0]}</div>
          <div className="poiListColumn">{poiLists[1]}</div>
          <div className="poiListColumn">{poiLists[2]}</div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  handleGoingClick: React.PropTypes.func.isRequired,
  handleLogin: React.PropTypes.func.isRequired,
  loggedIn: React.PropTypes.bool.isRequired,
  pois: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  handleKeyPress: React.PropTypes.func.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  searchAPI: React.PropTypes.func.isRequired,
  searchTerm: React.PropTypes.string.isRequired,
};

export default Search;
