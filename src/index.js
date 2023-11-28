import store from './customStore';
import * as actions from './actionCreators';

store.subscribe(() => {
  console.log('Store changed!');
});

store.dispatch(actions.bugAdded('Bug1'));
console.log(store.getState());
