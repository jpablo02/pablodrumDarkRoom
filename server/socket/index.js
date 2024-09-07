const socketio = require('socket.io');

module.exports = (server) => {
  const io = socketio(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    

    socket.on('walletAccount', (account) => {
      console.log(`Cuenta de wallet recibida: ${account}`);
    });

    socket.on('disconnect', () => {
      console.log('Cliente desconectado:', socket.id);
    });
  });
};
