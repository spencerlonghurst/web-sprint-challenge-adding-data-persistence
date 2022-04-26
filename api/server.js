const express = require('express');

const projectsRouter = require('./project/router');

const server = express();

server.use(express.json());

server.use('/api/projects', projectsRouter)

server.use('*', (req, res) => {
  res.json({ message: 'it seems to be workin'})
})

module.exports = server;
