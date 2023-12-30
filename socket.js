import Message from './models/Message.js';

function setupSocket(io) {
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Handle chat messages
    socket.on('message', async (data) => {
      // Save message to MongoDB
      const newMessage = new Message(data);
      await newMessage.save();

      // Broadcast message to all connected clients
      io.emit('message', data);
    });

    // Handle other socket events as needed
  });
}

export default setupSocket;
