import { combineReducers } from 'redux';
import user from './userReducer';
import POIs from './POIs';

export default combineReducers({ user, POIs });
