const express = require('express');
const UserController = require('../controllers/UserController');

const routes = express.Router();


routes.get('/', (req, res) => {
    res.send("Rota padrão");
})

routes.post('/user/create', UserController.store);

routes.get('/user/list', UserController.listAll);

module.exports = routes;