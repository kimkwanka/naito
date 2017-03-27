export function setSearchTerm(searchTerm) {
  return {
    type: 'SET_SEARCH_TERM',
    searchTerm,
  };
}
export function login(userName) {
  return {
    type: 'LOGIN',
    userName,
  };
}
