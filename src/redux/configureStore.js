import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import nasaReducer from './searchResult/search';

const store = configureStore({
  reducer: {
    nasaData: nasaReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
