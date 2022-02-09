const { Sequelize } = require('sequelize');
const dbConfig = require('../config/db');
const Address = require('../models/Address');
const User = require('../models/User');

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);

User.associate(connection.models);
Address.associate(connection.models);

module.exports = connection;