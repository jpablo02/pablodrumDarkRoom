const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: '*', 
    methods: ['GET', 'POST'],
  },
});


io.on('connection', (socket) => {
  console.log('Cliente conectado:', socket.id); 

  socket.on('walletAccount', (account) => {
    console.log(`Cuenta de wallet recibida: ${account}`);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
