const userService = require('../service/userService');

exports.registerUser = async (req, res) => {
    try {
        console.log('Req body: ', req.body);
        const result = await userService.register(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({error: err.message
        });
    }
};

exports.loginUser = async (req, res) => {
    try {
        console.log('LOGIN BODY:', req.body);
        const result = await userService.login(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}