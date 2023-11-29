// import reducer from './bugs';
import reducer from './reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from './middleware/logger';
import func from './middleware/func';
import toast from './middleware/toast';
import api from './middleware/api';

export default function () {
  // return configureStore({ reducer, middleware: [logger('console!'), func] });
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), logger('console!'), toast, api],
  });
}
