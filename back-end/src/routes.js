const routes = require('express').Router();

routes.get('/', (req, res) => res.json({ hello: '👌' }));

module.exports = routes;
