import { apiCallBegan } from '../api';
import { addBug } from '../bugs';
import configureStore from '../configureStore';

// describe('bugsSlice', () => {
//   describe('action creators', () => {
//     it('addBug', () => {
//       const bug = { description: 'a' };
//       const result = addBug(bug);
//       const expected = {
//         type: apiCallBegan.type,
//         payload: {
//           url: '/bugs',
//           method: 'post',
//           data: bug,
//           onSuccess: 'bugs/bugAdded',
//         },
//       };
//       expect(result).toEqual(expected);
//     });
//   });
// });

describe('bugsSlice', () => {
  it('should handle the addBug action', async () => {
    const store = configureStore();
    const bug = { description: 'a' };
    await store.dispatch(addBug(bug));
    console.log(store.getState());
  });
});
