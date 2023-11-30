import configureStore from './store/configureStore';
import { loadBugs } from './store/bugs';
import { addBug, resolveBug, assignBugToUser } from './store/bugs';

const store = configureStore();

// UI Layer
store.dispatch(loadBugs());
setTimeout(() => store.dispatch(resolveBug(1)), 2000);
setTimeout(() => store.dispatch(assignBugToUser(1,4)), 2000);
