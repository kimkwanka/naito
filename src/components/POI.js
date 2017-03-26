import React from 'react';
import GoingButton from './GoingButton';

class POI extends React.Component {
  render() {
    const nGoing = this.props.going.length;

    return (
      <div className="POI">
        <a href={this.props.url} target="_blank" rel="noopener noreferrer">
          <h3 className="poiTitle">{this.props.name}</h3>
        </a>
        <GoingButton loggedIn={this.props.loggedIn} goingArr={this.props.going} going={nGoing} id={this.props.id} handleGoingClick={this.props.handleGoingClick} />
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
  going: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  url: React.PropTypes.string.isRequired,
  imageUrl: React.PropTypes.string,
  snippetText: React.PropTypes.string,
  id: React.PropTypes.string.isRequired,
  handleGoingClick: React.PropTypes.func.isRequired,
};
POI.defaultProps = {
  snippetText: '',
  imageUrl: '',
};

export default POI;
