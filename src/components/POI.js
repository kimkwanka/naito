/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';

class POI extends React.Component {
  render() {
    return (
      <div className="POI">
        <a href={this.props.url}>
          <h3 className="poiTitle">{this.props.name}</h3>
        </a>
        <button className="poiGoingButton">{this.props.going}</button>
        <div className="clearfix" />
        <hr />
        <img className="poiImg" src={this.props.imageUrl} alt={this.props.name} />
        <p className="poiSnippet">&quot;{this.props.snippetText}&quot;</p>
        <div className="clearfix" />
      </div>
    );
  }
}
export default POI;
