const express = require('express');
const User = require('../models/User');

module.exports = {

    async store(req, res) {
        const { nome, email } = req.body;

        const user = await User.create({
            nome, email
        });

        return res.json(user);
    }
}




