/* global window */
// Based on https://github.com/jaredhanson/passport-facebook/issues/188
import React from 'react';
import { connect } from 'react-redux';

class AuthSuccess extends React.Component {
  componentDidMount() {
    window.opener.loginSuccess(this.props.userName);
    window.opener.loginSuccess = null;
    window.close();
  }

  render() {
    return (
      <div>Authentication successful.</div>
    );
  }
}
AuthSuccess.propTypes = {
  userName: React.PropTypes.string.isRequired,
};
export default connect(store => ({
  userName: store.user.name,
  loggedIn: store.user.loggedIn,
}))(AuthSuccess);

