let lastId = 0;

// reducer is a pure function
function reducer(state = [], action) {
  switch (action.type) {
    case 'bugAdded':
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case 'bugRemoved':
      return state.filter((bug) => bug.id !== action.payload.id);
    default:
      return state;
  }
}