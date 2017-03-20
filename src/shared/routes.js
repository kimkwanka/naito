import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';
import StyleGuide from '../components/Styleguide';

// export getRoutes function instead of simple JSX to access redux store in checkAuth
const getRoutes = store => (
  <Route path="/" component={Layout} >
    <IndexRoute component={Home} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/styleguide" component={StyleGuide} />
  </Route>
);

export default getRoutes;
