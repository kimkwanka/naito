/* eslint-disable consistent-return */

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import getRoutes from '../shared/routes';
import { hydrateStore } from '../shared/store';

const css = (process.env.NODE_ENV !== 'production') ? '' : 'link rel="stylesheet" href="/style.css"';
const webRoot = (process.env.NODE_ENV !== 'production') ? 'http://localhost:8081' : '';

export default (req, res, next) => {
  // req.user is != undefined when successfully logged in with Github (githubAuth.js)
  const user = req.user ? { name: req.user.username, searchTerm: 'Berlin', loggedIn: true } : { name: '', searchTerm: '', loggedIn: false };

  const store = hydrateStore({ user });

  match({ routes: getRoutes(store), location: req.url }, (matchErr, redirect, props) => {
    if (matchErr) {
      res.status(500).send(matchErr.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      const appHtml = renderToString(
        <Provider store={store}>
          <RouterContext {...props} />
        </Provider>,
      );
      res.status(200).render('index', { content: appHtml, preloadedState: store.getState(), title: 'Naito', css, webRoot });
    } else {
      next(); // Let Express handle all other routes
    }
  });
};
