const user = (state = {
  name: 'InsertNameHere',
  searchTerm: '',
  loggedIn: false,
}, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return Object.assign({}, state, { searchTerm: action.searchTerm });
    default:
      return state;
  }
};

export default user;
