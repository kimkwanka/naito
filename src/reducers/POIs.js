const POI = (state = {
  name: '',
  snippet: '',
  url: '',
  imgUrl: '',
  going: [],
}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

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
