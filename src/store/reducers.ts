import { combineReducers } from 'redux';
import AwaitControl from 'react-redux-await-control';

export default combineReducers(AwaitControl.init().mix({}));
