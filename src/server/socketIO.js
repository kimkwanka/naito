const socketIO = (socket) => {
  console.log('User connected!');
  socket.on('disconnect', () => {
    console.log('User disconnected!!!');
  });
};

export default socketIO;
