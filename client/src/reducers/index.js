import { combineReducers } from 'redux';

import auth from './auth';
// import errors from './session_errors_reducer'

export const reducers = combineReducers({ auth });