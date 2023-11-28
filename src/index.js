import store from './store';
import * as actions from './actionTypes';
import { bugAdded } from './actionCreators';

const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState()); // when store changed, get store state
});

store.dispatch(bugAdded('Bug 1'));

unsubscribe(); // the second time we are dispatching an action, we don't get notified

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});

console.log(store.getState());
