const POIs = (state = [], action) => {
  switch (action.type) {
    case 'SET_POIS': {
      const oldPOIS = state.slice(0);
      return oldPOIS.concat(action.pois);
    }
    default:
      return state;
  }
};

export default POIs;
