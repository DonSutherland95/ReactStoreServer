const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const storeRouter = require('./store/store-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/items', storeRouter)
server.get("/", (req, res)=>{
    res.json({message:"api connected"})
})

module.exports = server;