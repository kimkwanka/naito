import yelpAPI from './yelpAPI';
import POIs from './db';
import { POI as poiReducer } from '../reducers/poisReducer';

const socketIO = (socket) => {
  console.log('User connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('ACTION_START', (action) => {
    console.log(action);
    let tmpPoi = poiReducer(undefined, action);

    POIs.findOne({ id: action.poiId }, (dbFindErr, foundPoi) => {
      if (dbFindErr) {
        console.log('DB FindOne Error', dbFindErr);
      } else if (foundPoi) {
        // Note the toObject(). Without it, we get an Object with extra properties
        // which doesn't work correctly with the reducer
        tmpPoi = poiReducer(foundPoi.toObject(), action);
        // eslint-disable-next-line
        foundPoi.going = tmpPoi.going;

        foundPoi.save((dbSaveErr, updatedPoi) => {
          if (dbSaveErr) {
            console.log('DB Save Error', dbSaveErr);
          } else {
            console.log('Updated: ', updatedPoi);
            socket.emit('ACTION_SUCCESS', action);
            socket.broadcast.emit('ACTION_OTHER_CLIENT', action);
          }
        });
      } else {
        const newPoi = new POIs({
          id: action.poiId,
          going: tmpPoi.going,
        });

        newPoi.save((dbSaveErr, savedPoi) => {
          if (dbSaveErr) {
            console.log('DB Save Error', dbSaveErr);
          } else {
            console.log('Saved: ', savedPoi);
            socket.emit('ACTION_SUCCESS', action);
            socket.broadcast.emit('ACTION_OTHER_CLIENT', action);
          }
        });
      }
    });
  });

  socket.on('SEARCH_API', (searchTerm) => {
    console.log(searchTerm);
    yelpAPI.search({ term: 'bar', location: searchTerm })
    .then((data) => {
      const poiIdArr = [];
      const poiGoingArr = [];
      POIs.find((dbFindErr, pois) => {
        if (dbFindErr) {
          console.log(dbFindErr);
        }
        pois.forEach((p) => {
          poiIdArr.push(p.id);
          poiGoingArr.push(p.going);
        });
        data.businesses.forEach((b) => {
          const index = poiIdArr.indexOf(b.id);
          if (index !== -1) {
            b.going = poiGoingArr[index];
            console.log('Found:', b.id, b.going);
          }
        });
        return socket.emit('SEARCH_SUCCESS', data);
      });
    })
    .catch((err) => {
      console.error(err);
      socket.emit('SEARCH_ERROR', err);
    });
  });
};

export default socketIO;
