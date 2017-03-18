/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */

import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import SearchButton from './SearchButton';
import { setSearchTerm } from '../actions/userActions';

@connect(store => ({
  searchTerm: store.user.searchTerm,
}))
class Home extends React.Component {
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }
  handleChange = (e) => {
    this.props.dispatch(setSearchTerm(e.target.value));
  }
  handleClick = () => {
    console.log('Click');
    axios.get(`/api/${this.props.searchTerm}`).then((res) => {
      console.log('RESPONSE:', res);
    }).catch((err) => {
      console.log(err);
    });
  }
  render() {
    return (
      <div>
        <h1>naito</h1>
        <input onChange={this.handleChange} onKeyPress={this.handleKeyPress} type="text" placeholder="Enter your city" value={this.props.searchTerm} />
        <SearchButton handleClick={this.handleClick} searchTerm={this.props.searchTerm} />
      </div>
    );
  }
}
export default Home;
