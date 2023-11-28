import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer); // 'createStore' is deprecated.

export default store;
