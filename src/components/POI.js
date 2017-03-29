import React from 'react';
import GoingButton from './GoingButton';

class POI extends React.Component {

  static allPois = [];

  static closeAll() {
    if (POI.allPois) {
      POI.allPois.forEach(p => p.close());
    }
  }
  static resetSiblings() {
    if (POI.allPois) {
      POI.allPois.forEach(p => p.nextSiblings = undefined);
    }
  }

  constructor() {
    super();
    this.state = {
      opened: false,
      className: 'POI',
    };
    POI.allPois.push(this);
  }

  getNextSiblings = (elem) => {
    const siblings = [];
    let el = elem;
    while (el.nextSibling) {
      el = el.nextSibling;
      siblings.push(el);
    }
    return siblings;
  }

  open(e) {
    this.state = {
      opened: true,
      className: 'POI opened',
    };
    if (!this.nextSiblings) {
      this.nextSiblings = this.getNextSiblings(e.target.parentElement.parentElement);
      this.offsetY = e.target.parentElement.parentElement.childNodes[0].clientHeight + 2;
    }
    this.nextSiblings.forEach(el => (el.style.transform = `translateY(${this.offsetY}px)`));
    this.forceUpdate();
  }

  close() {
    if (this.state.opened) {
      this.state = {
        opened: false,
        className: 'POI',
      };
      this.nextSiblings.forEach(el => (el.style.transform = 'translateY(0)'));
      this.forceUpdate();
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    if (this.state.opened) {
      this.close();
    } else {
      POI.closeAll();
      this.open(e);
    }
  }

  render() {
    const nGoing = this.props.going.length;
    /* const imgUrl = this.props.imageUrl.replace('ms.jpg', 'l.jpg');
    const backgroundStyle = {
      backgroundImage: `url(${imgUrl})`,
      backgroundSize: 'cover',
    };
    const backgroundStyle2 = {
      backgroundImage: `url(${imgUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: '0px -48px',
    }; */
    const goingText = nGoing ? `${this.props.going[0]}` : 'No one!';
    const snippetText = this.props.snippetText ? `"${this.props.snippetText}"` : this.props.snippetText;

    return (
      <div className={this.state.className} style={{ animation: `POIANIMATION 0.6s ${this.props.animationDelay / 40}s 1 backwards, POIANIMATION2 0.2s ${this.props.animationDelay / 40}s 1 backwards` }}>
        <div className="poiInfo">
          <p className="poiGoing"><span>Going: </span><span>{goingText}</span></p>
          <p className="poiSnippet">{snippetText}</p>
        </div>
        <div className="poiBG">
          <h3 className="poiTitle" onClick={this.handleClick}>{this.props.name}</h3>
          <GoingButton handleLogin={this.props.handleLogin} loggedIn={this.props.loggedIn} goingArr={this.props.going} going={nGoing} id={this.props.id} handleGoingClick={this.props.handleGoingClick} />
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}

POI.propTypes = {
  handleLogin: React.PropTypes.func.isRequired,
  loggedIn: React.PropTypes.bool.isRequired,
  name: React.PropTypes.string.isRequired,
  going: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  url: React.PropTypes.string.isRequired,
  animationDelay: React.PropTypes.number.isRequired,
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
