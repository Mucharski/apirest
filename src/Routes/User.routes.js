const { Router } = require('express');
const UserController = require('../controllers/UserController');

const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send("Rota padrão");
})

routes.get('/user/create', (req, res) => {
    UserController.createProduto();
    res.send("Foi");
    
});

module.exports = routes;