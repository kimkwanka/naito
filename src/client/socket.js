import * as io from 'socket.io-client';

let socket = null;

if (typeof window !== 'undefined') {
  socket = io();

  socket.on('connect', () => {
    console.log('connect');
  });

  socket.on('some event', (data) => {
    console.log('EVENT:', data);
  });

  socket.on('ACTION_OTHER_CLIENT', (action) => {
    console.log('Received Action:', action);
  });
}


export default socket;
