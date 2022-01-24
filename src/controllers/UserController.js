const express = require('express');
const User = require('../models/User');

module.exports = {

    createProduto: () => {
        User.create({
            id: 2,
            nome: "José"
        })
    }
}




