import * as io from 'socket.io-client';

let socket = null;

if (typeof window !== 'undefined') {
  socket = io();
}

export default socket;
