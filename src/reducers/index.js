import { combineReducers } from 'redux';
import user from './userReducer';
import { POIs } from './poisReducer';

export default combineReducers({ user, POIs });
