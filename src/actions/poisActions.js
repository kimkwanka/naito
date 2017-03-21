export function setPOIS(pois) {
  return {
    type: 'SET_POIS',
    pois,
  };
}
export function toggleGoing(poiName) {
  return {
    type: 'SET_POIS',
    poiName,
  };
}
