import yelpAPI from './yelpAPI';
// import POI from './db';

const socketIO = (socket) => {
  console.log('User connected');
  // socket.broadcast.emit('some event', 23);
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
  socket.on('ACTION_START', (action) => {
    console.log(action);
    socket.emit('ACTION_SUCCESS', action);
    socket.broadcast.emit('ACTION_OTHER_CLIENT', action);
  });

  socket.on('SEARCH_API', (searchTerm) => {
    console.log(searchTerm);
    yelpAPI.search({ term: 'bar', location: searchTerm })
    .then((data) => {
      /* POI.find((err, pois) => {
        if (err) console.error(err);
        console.log('POIS:', pois);
        return pois;
      });*/
      data.businesses.forEach((b) => {
        console.log(b.id);
      });

      socket.emit('SEARCH_SUCCESS', data);
    })
    .catch((err) => {
      console.error(err);
      socket.emit('SEARCH_ERROR', err);
    });
  });
};

export default socketIO;
