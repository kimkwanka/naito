const POIs = (state = [], action) => {
  switch (action.type) {
    case 'SET_POIS': {
      return action.pois;
    }
    default:
      return state;
  }
};

export default POIs;
