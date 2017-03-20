import React from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux';
import Header from './Header';

@connect(store => ({
  loggedIn: store.user.loggedIn,
}))
class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header loggedIn={this.props.loggedIn} />
        <main className="container">
          <IndexLink to="/" activeClassName="active"><li className="navItem">Home</li></IndexLink>
          <Link to="/dashboard" activeClassName="active"><li className="navItem">Dashboard</li></Link>
          <Link to="/styleguide" activeClassName="active"><li className="navItem">Style Guide</li></Link>
          {this.props.children}
        </main>
      </div>
    );
  }
}
Layout.propTypes = {
  children: React.PropTypes.node,
  loggedIn: React.PropTypes.bool.isRequired,
};
Layout.defaultProps = () => ({ children: null });

export default Layout;
