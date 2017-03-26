import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header loggedIn={this.props.loggedIn} />
        <main className="container">
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

export default connect(store => ({
  loggedIn: store.user.loggedIn,
}))(Layout);
