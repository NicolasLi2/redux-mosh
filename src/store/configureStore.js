// import reducer from './bugs';
import reducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';
import logger from './middleware/logger';

export default function () {
  return configureStore({ reducer, middleware: [logger('console!')] });
}
