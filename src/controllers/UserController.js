const User = require('../models/User');


module.exports = {
    async listAll(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async store(req, res) {

        const { nome, email } = req.body;

        const user = await User.create({
            nome, email
        });

        return res.json(user);
    }
}




