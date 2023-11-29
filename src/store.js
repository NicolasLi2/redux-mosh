import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(
  reducer,
  // https://github.com/zalmoxisus/redux-devtools-extension#usage
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); // 'createStore' is deprecated.

export default store;
