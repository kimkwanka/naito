const user = (state = {
  name: '',
  searchTerm: '',
  loggedIn: false,
}, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return Object.assign({}, state, { searchTerm: action.searchTerm });
    case 'LOGIN':
      return Object.assign({}, state, { name: action.userName, loggedIn: true });
    case 'LOGOUT':
      return Object.assign({}, state, { name: '', loggedIn: false });
    default:
      return state;
  }
};

export default user;
