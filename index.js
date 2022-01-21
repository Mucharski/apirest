const express = require('express');
const bodyParser = require('body-parser');
const database = require('./src/database/db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000);