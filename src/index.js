import store from './store';

const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState()); // when store changed, get store state
});

store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'Bug1',
  },
});

unsubscribe(); // the second time we are dispatching an action, we don't get notified

store.dispatch({
  type: 'bugRemoved',
  payload: {
    id: 1,
  },
});

console.log(store.getState());
