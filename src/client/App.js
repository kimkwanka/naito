import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import getRoutes from '../shared/routes';
import { getHydratedStore } from '../shared/store';

const store = getHydratedStore();

export default class extends React.Component {
  render() {
    return (<Provider store={store}>
      <Router routes={getRoutes(store)} history={browserHistory} />
    </Provider>);
  }
}
