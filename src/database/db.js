const Sequelize = require('sequelize');
const sequelize = new Sequelize("apirest", "admin", "12345678", {
    host: "firstapinode.cn4gog3ghcla.us-east-1.rds.amazonaws.com",
    port: 3306,
    dialect: "mysql"
});

sequelize.authenticate().then(() => {
    console.log("Conexão estabelecida com sucesso");
}).catch((error) => {
    console.error("Impossível conectar - ", error);
});

module.exports = sequelize;