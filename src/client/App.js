import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import getRoutes from '../shared/routes';
import { getHydratedStore } from '../shared/store';
import socket from '../client/socket';

const store = getHydratedStore();

socket.on('ACTION_SUCCESS', (action) => {
  console.log('Action successfull');
  store.dispatch(action);
});
socket.on('ACTION_OTHER_CLIENT', (action) => {
  //console.log('Action successfull');
  store.dispatch(action);
});

export default class extends React.Component {
  render() {
    return (<Provider store={store}>
      <Router routes={getRoutes(store)} history={browserHistory} />
    </Provider>);
  }
}
