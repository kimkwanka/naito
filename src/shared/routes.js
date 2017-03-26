import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Layout from '../components/Layout';
import Home from '../components/Home';

// export getRoutes function instead of simple JSX to access redux store in onEnter for example
const getRoutes = store => (
  <Route path="/" component={Layout} >
    <IndexRoute component={Home} />
  </Route>
);

export default getRoutes;
