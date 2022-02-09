const express = require('express');
const AddressController = require('../controllers/AddressController');
const UserController = require('../controllers/UserController');

const routes = express.Router();


routes.get('/', (req, res) => {
    res.send("Rota padrão");
})

routes.post('/user/create', UserController.store);
routes.get('/user/list', UserController.listAll);

routes.get('/users/:user_id/addresses/list', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store);

module.exports = routes;