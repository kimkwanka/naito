export const POI = (state = {
  name: '',
  snippet: '',
  url: '',
  imgUrl: '',
  going: [],
  address: [],
  id: '',
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
    case 'SET_GOING': {
      let going = state.going.slice(0);
      const index = going.indexOf(action.userName);
      if (index === -1) {
        going = going.concat(action.userName);
      }
      return Object.assign({}, state, { going });
    }
    case 'SET_NOT_GOING': {
      const going = state.going.slice(0);
      const index = going.indexOf(action.userName);
      if (index !== -1) {
        going.splice(index, 1);
      }
      return Object.assign({}, state, { going });
    }
    default:
      return state;
  }
};

export const POIs = (state = [], action) => {
  switch (action.type) {
    case 'SET_POIS': {
      return action.pois.map((e, i) => (POI({}, { type: action.type, poi: action.pois[i] })));
    }
    case 'SET_GOING': {
      return state.map((e) => {
        if (e.id === action.poiId) {
          return POI(e, action);
        }
        return e;
      });
    }
    case 'SET_NOT_GOING': {
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
