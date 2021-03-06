import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import nasaReducer from './searchReducer';

const store = configureStore({
  reducer: {
    nasaData: nasaReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
