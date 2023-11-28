import store from './store';
import * as actions from './actionTypes';

const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState()); // when store changed, get store state
});

store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: 'Bug1',
  },
});

unsubscribe(); // the second time we are dispatching an action, we don't get notified

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});

console.log(store.getState());
