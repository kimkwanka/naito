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
};

export default socketIO;
