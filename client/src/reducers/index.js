import {combineReducers} from 'redux';
import postReducer from './postReducers';
import errorReducer from './errorReducers';
import authReducer from './authReducers';

export default combineReducers({
    post:postReducer,
    error:errorReducer,
    auth:authReducer
});