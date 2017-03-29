import React from 'react';
import { connect } from 'react-redux';
import Hero from './Hero';
import POI from './POI';
import { setSearchTerm } from '../actions/userActions';
import { setGoing, setNotGoing, setPOIS } from '../actions/poisActions';
import socket from '../client/socket';

class Home extends React.Component {
  constructor() {
    super();
    this.heroStillInCenter = true;
  }
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.searchAPI();
    }
  }
  handleGoingClick = (id, goingArr) => {
    if (typeof window !== 'undefined') {
      let action = null;
      if (goingArr.indexOf(this.props.userName) === -1) {
        action = setGoing(id, this.props.userName);
      } else {
        action = setNotGoing(id, this.props.userName);
      }
      socket.emit('ACTION_START', action);
      // console.log('ACTION_START:', action);
    }
  }
  handleChange = (e) => {
    this.props.dispatch(setSearchTerm(e.target.value));
  }
  searchAPI = () => {
    if (this.props.searchTerm !== '') {
      Hero.flyUp();
      POI.closeAll();
      POI.resetSiblings();
      this.heroStillInCenter = false;
      this.props.dispatch(setPOIS([]));
      if (typeof window !== 'undefined') {
        socket.emit('SEARCH_API', this.props.searchTerm);
        // console.log('SEARCH_API:', this.props.searchTerm);
      }
    }
  }
  render() {
    const poiList = this.props.pois.map((p, i) => {
      const animationDelay = i;
      return <POI animationDelay={animationDelay} id={p.id} loggedIn={this.props.loggedIn} handleLogin={this.props.handleLogin} handleGoingClick={this.handleGoingClick} name={p.name} going={p.going} url={p.url} imageUrl={p.imageUrl} snippetText={p.snippetText} address={p.address} />;
    });
    const poiLists = [[], [], []];
    poiList.forEach((p, i) => {
      const index = i % 3;
      poiLists[index].push(p);
    });
    const searchResultsClass = this.heroStillInCenter ? 'searchResultsOuter' : 'searchResultsOuter searchResultsVisible';
    return (
      <div>
        <Hero searchTerm={this.props.searchTerm} searchAPI={this.searchAPI} handleChange={this.handleChange} handleKeyPress={this.handleKeyPress} />
        <div className={searchResultsClass}>
          <div className="searchResults" >
            <div className="poiListColumn">{poiLists[0]}</div>
            <div className="poiListColumn">{poiLists[1]}</div>
            <div className="poiListColumn">{poiLists[2]}</div>
          </div>
        </div>
      </div>
    );
  }
}
Home.propTypes = {
  handleLogin: React.PropTypes.func.isRequired,
  loggedIn: React.PropTypes.bool.isRequired,
  searchTerm: React.PropTypes.string.isRequired,
  userName: React.PropTypes.string.isRequired,
  pois: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

export default connect(store => ({
  searchTerm: store.user.searchTerm,
  userName: store.user.name,
  loggedIn: store.user.loggedIn,
  pois: store.POIs,
}))(Home);
