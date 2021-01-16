import {combineReducers} from 'redux';

import auth from './session_api_reducer';

export const reducers = combineReducers({ auth });