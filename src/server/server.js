import express from 'express';
import yelpAPI from './yelpAPI';

const app = express();

const path = require('path');

const handleReactRoutes = require('./handleReactRoutes').default;

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.get('/api/:location', (req, res) => {
  yelpAPI.search({ term: 'bar', location: req.params.location })
  .then((data) => {
    //console.log(data);
    res.send(data);
  })
  .catch((err) => {
    console.error(err);
    res.send(err);
  });
});
app.get('*', handleReactRoutes);

app.use(express.static(path.join(__dirname, '../../dist/public')));

export default app;
