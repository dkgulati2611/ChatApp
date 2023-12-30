// server.js
import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose'
import setupSocket from './socket.js';
import connectDb from './config/db.js';


// configure env
dotenv.config();

const app = express();

// Creating an HTTP server
const server = http.createServer();

// Creating a new instance of the Server class
const io = new Server(server);

// connect to database
connectDb();

// Socket.io setup
setupSocket(io);

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
