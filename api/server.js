const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/items', itemsRouter)

module.exports = server;