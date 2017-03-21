export function setPOIS(pois) {
  return {
    type: 'SET_POIS',
    pois,
  };
}
export function toggleGoing(poiId, userName) {
  return {
    type: 'TOGGLE_GOING',
    poiId,
    userName,
  };
}
