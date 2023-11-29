import configureStore from './store/configureStore';
import { loadBugs } from './store/bugs';
import { addBug } from './store/bugs';

const store = configureStore();

// UI Layer
// store.dispatch(loadBugs());
store.dispatch(addBug({ description: 'a' }));
