export function setPOIS(pois) {
  return {
    type: 'SET_POIS',
    pois,
  };
}
export function setGoing(poiId, userName) {
  return {
    type: 'SET_GOING',
    poiId,
    userName,
  };
}
export function setNotGoing(poiId, userName) {
  return {
    type: 'SET_NOT_GOING',
    poiId,
    userName,
  };
}
