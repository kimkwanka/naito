import React from 'react';
import { connect } from 'react-redux';
import SearchButton from './SearchButton';
import POI from './POI';
import { setSearchTerm } from '../actions/userActions';
import { toggleGoing } from '../actions/poisActions';
import socket from '../client/socket';

class Home extends React.Component {
  componentDidMount() {
    // When we get to this page, try to search the API.
    // (since this.props.searchTerm will be != '' in cases where the user just logged in
    // and got back from the authentication page)
    this.searchAPI();
  }
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.searchAPI();
    }
  }
  handleGoingClick = (id) => {
    if (typeof window !== 'undefined') {
      socket.emit('ACTION_START', toggleGoing(id, this.props.userName));
      console.log('ACTION_START:', toggleGoing(id, this.props.userName));
    }
  }
  handleChange = (e) => {
    this.props.dispatch(setSearchTerm(e.target.value));
  }
  searchAPI = () => {
    if (this.props.searchTerm !== '') {
      if (typeof window !== 'undefined') {
        socket.emit('SEARCH_API', this.props.searchTerm);
        console.log('SEARCH_API:', this.props.searchTerm);
      }
    }
  }
  render() {
    const poiList = this.props.pois.map(p => (
      <POI id={p.id} loggedIn={this.props.loggedIn} handleGoingClick={this.handleGoingClick} name={p.name} going={p.going} url={p.url} imageUrl={p.imageUrl} snippetText={p.snippetText} address={p.address} />
    ));
    return (
      <div>
        <SearchButton handleClick={this.searchAPI} searchTerm={this.props.searchTerm} />
        <div className="searchBarOuter">
          <input className="searchBar" onChange={this.handleChange} onKeyPress={this.handleKeyPress} type="text" placeholder="Enter your location" value={this.props.searchTerm} />
        </div>
        {poiList}
      </div>
    );
  }
}
Home.propTypes = {
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
