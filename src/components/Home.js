import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import SearchButton from './SearchButton';
import POI from './POI';
import { setSearchTerm } from '../actions/userActions';
import { setPOIS } from '../actions/poisActions';

@connect(store => ({
  searchTerm: store.user.searchTerm,
  loggedIn: store.user.loggedIn,
  pois: store.POIs,
}))
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
  handleChange = (e) => {
    this.props.dispatch(setSearchTerm(e.target.value));
  }
  searchAPI = () => {
    if (this.props.searchTerm !== '') {
      axios.get(`/api/${this.props.searchTerm}`).then((res) => {
        console.log('RESPONSE:', res);
        this.props.dispatch(setPOIS(res.data.businesses));
      }).catch((err) => {
        console.log(err);
      });
    }
  }
  render() {
    const poiList = this.props.pois.map(p => (
      <POI loggedIn={this.props.loggedIn} name={p.name} going={3} url={p.url} imageUrl={p.image_url} snippetText={p.snippet_text} address={p.location.display_address} />
    ));
    return (
      <div>
        <input onChange={this.handleChange} onKeyPress={this.handleKeyPress} type="text" placeholder="Enter your city" value={this.props.searchTerm} />
        <SearchButton handleClick={this.searchAPI} searchTerm={this.props.searchTerm} />
        {poiList}
      </div>
    );
  }
}
Home.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  searchTerm: React.PropTypes.string.isRequired,
  pois: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  dispatch: React.PropTypes.func.isRequired,
};
export default Home;
