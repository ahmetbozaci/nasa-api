import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import nasaReducer from './nasa';

const rootReducer = combineReducers({
  nasaData: nasaReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));


export default store;