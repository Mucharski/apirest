const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./src/Routes/User.routes')
require('./src/database/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.listen(3000);

