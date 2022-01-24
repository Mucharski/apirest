require('dotenv').config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql"
});

sequelize.authenticate().then(() => {
    console.log("Conexão estabelecida com sucesso");
}).catch((error) => {
    console.error("Impossível conectar - ", error);
});

module.exports = sequelize;