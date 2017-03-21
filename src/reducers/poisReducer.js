const POI = (state = {
  name: '',
  snippet: '',
  url: '',
  imgUrl: '',
  going: [],
  address: [],
}, action) => {
  switch (action.type) {
    case 'SET_POIS': {
      // Extract only the properties we need
      const {
        name,
        snippet_text: snippetText,
        url,
        image_url: imageUrl,
        location: { display_address: address },
        going = [],
        id,
      } = action.poi;

      return { name, snippetText, url, imageUrl, going, address, id };
    }
    case 'TOGGLE_GOING': {
      let going = state.going.slice(0);
      const index = going.indexOf(action.userName);
      if (index !== -1) {
        going.splice(index, 1);
      } else {
        going = going.concat(action.userName);
      }
      console.log(going);
      return Object.assign({}, state, { going });
    }
    default:
      return state;
  }
};

const POIs = (state = [], action) => {
  switch (action.type) {
    case 'SET_POIS': {
      return action.pois.map((e, i) => (POI({}, { type: action.type, poi: action.pois[i] })));
    }
    case 'TOGGLE_GOING': {
      return state.map((e) => {
        if (e.id === action.poiId) {
          return POI(e, action);
        }
        return e;
      });
    }
    default:
      return state;
  }
};

export default POIs;
