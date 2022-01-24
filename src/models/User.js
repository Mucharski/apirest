const Sequelize = require('sequelize');
const database = require('../database/db');

const User = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
    }
    
});

module.exports = User;