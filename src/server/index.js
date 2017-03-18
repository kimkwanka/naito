import http from 'http';

import app from './server';

const PORT = process.env.PORT || 8080;
const consumer_key = process.env.YELP_CONSUMER_KEY || '';
const consumer_secret = process.env.YELP_CONSUMER_SECRET || '';
const token = process.env.YELP_TOKEN || '';
const token_secret = process.env.YELP_TOKEN_SECRET || '';

console.log('YELP:', consumer_key, consumer_secret, token, token_secret, process.env.MONGODB_URI);
const server = http.createServer(app);

let currentApp = app;

server.listen(PORT, () => {
  console.log(`Express server running at ${PORT} in ${process.env.NODE_ENV || 'dev'} mode`);
});

if ((process.env.NODE_ENV !== 'production') && module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  });
}
