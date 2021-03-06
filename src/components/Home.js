import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import POI from './POI';
import { setSearchTerm } from '../actions/userActions';
import { setGoing, setNotGoing, setPOIS } from '../actions/poisActions';
import socket from '../client/socket';

class Home extends React.Component {
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
      Search.flyUp();
      POI.closeAll();
      POI.resetSiblings();
      POI.hideAll();
      setTimeout(() => (this.props.dispatch(setPOIS([]))), 300);
      if (typeof window !== 'undefined') {
        socket.emit('SEARCH_API', this.props.searchTerm);
        // console.log('SEARCH_API:', this.props.searchTerm);
      }
    }
  }
  render() {
    return (
      <Search loggedIn={this.props.loggedIn} handleGoingClick={this.handleGoingClick} handleLogin={this.props.handleLogin} pois={this.props.pois} searchTerm={this.props.searchTerm} searchAPI={this.searchAPI} handleChange={this.handleChange} handleKeyPress={this.handleKeyPress} />
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
