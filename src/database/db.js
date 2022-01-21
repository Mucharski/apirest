const Sequelize = require('sequelize');
const sequelize = new Sequelize("primeiraapinode", "admin", "12345678", {
    host: "primeiraapinode.cn4gog3ghcla.us-east-1.rds.amazonaws.com",
    port: 3306,
    dialect: "mysql"
});

sequelize.authenticate().then(() => {
    console.log("Conexão estabelecida com sucesso");
}).catch((error) => {
    console.error("Impossível conectar - ", error);
});

module.exports = sequelize;