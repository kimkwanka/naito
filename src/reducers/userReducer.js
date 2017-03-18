const user = (state = {
  name: 'InsertNameHere',
  searchTerm: '',
}, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return Object.assign({}, state, { searchTerm: action.searchTerm });
    default:
      return state;
  }
};

export default user;
