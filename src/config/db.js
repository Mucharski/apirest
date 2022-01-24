// require('dotenv').config();

// const Sequelize = require('sequelize');
// const sequelize = new Sequelize({
//     dialect: "sqlite",
//     storage: './database.sqlite'
// });

// sequelize.authenticate().then(() => {
//     console.log("Conexão estabelecida com sucesso");
// }).catch((error) => {
//     console.error("Impossível conectar - ", error);
// });

module.exports = {
    dialect: 'sqlite',
    storage: './database.sqlite',
    define: {
        timestamps: true,
        underscored: true,
    },
};