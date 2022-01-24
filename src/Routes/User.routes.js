const { Router } = require('express');
const UserController = require('../controllers/UserController');

const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send("Rota padrão");
})

routes.get('/user/create', () => {
    UserController.store();
});

module.exports = routes;