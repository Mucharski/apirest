const express = require('express');
const bodyParser = require('body-parser');
const User = require('./src/models/User');
const UserRotas = require('./src/Routes/User.routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(UserRotas);

(async () => {
    const database = require('./src/database/db');

    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();

app.listen(3000);