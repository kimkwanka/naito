import express from 'express';
import bodyParser from 'body-parser';
import yelpAPI from './yelpAPI';
import githubAuth from './githubAuth';
import POI from './db';

const app = express();

const path = require('path');

const handleReactRoutes = require('./handleReactRoutes').default;

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/:location', (req, res) => {
  yelpAPI.search({ term: 'bar', location: req.params.location })
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    console.error(err);
    res.send(err);
  });
});

app.post('/api/:location/:id', (req, res) => {
  console.log(req.params.location, req.params.id, req.body);
  // POI.save
  res.send('Saving successful');
});

githubAuth(app);

app.get('*', handleReactRoutes);

app.use(express.static(path.join(__dirname, '../../dist/public')));

export default app;
