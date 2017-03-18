/* eslint-disable camelcase */
import Yelp from 'yelp';

const consumer_key = process.env.YELP_CONSUMER_KEY || '';
const consumer_secret = process.env.YELP_CONSUMER_SECRET || '';
const token = process.env.YELP_TOKEN || '';
const token_secret = process.env.YELP_TOKEN_SECRET || '';

const yelpAPI = new Yelp({
  consumer_key,
  consumer_secret,
  token,
  token_secret,
});

export default yelpAPI;
