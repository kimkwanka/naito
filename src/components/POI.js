import React from 'react';
import GoingButton from './GoingButton';

class POI extends React.Component {
  render() {
    return (
      <div className="POI">
        <a href={this.props.url}>
          <h3 className="poiTitle">{this.props.name}</h3>
        </a>
        <GoingButton loggedIn={this.props.loggedIn} going={this.props.going} />
        <div className="clearfix" />
        <hr />
        <img className="poiImg" src={this.props.imageUrl} alt={this.props.name} />
        <p className="poiSnippet">{this.props.snippetText}</p>
        <div className="clearfix" />
      </div>
    );
  }
}

POI.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  name: React.PropTypes.string.isRequired,
  going: React.PropTypes.number.isRequired,
  url: React.PropTypes.string.isRequired,
  imageUrl: React.PropTypes.string.isRequired,
  snippetText: React.PropTypes.string,
};
POI.defaultProps = {
  snippetText: '',
};

export default POI;
