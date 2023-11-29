// import reducer from './bugs';
import reducer from './reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from './middleware/logger';
import func from './middleware/func';

export default function () {
  // return configureStore({ reducer, middleware: [logger('console!'), func] });
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), logger('console!')],
  });
}
