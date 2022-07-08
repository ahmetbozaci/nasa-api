import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import nasaReducer from './searchResult/search';

const rootReducer = combineReducers({
  nasaData: nasaReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
