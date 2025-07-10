const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');

exports.register = async(payload) => {
    const {name, email, password} = payload;

    if (!name || !email || !password) {
        throw new Error('All fields are required');
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({name, email, password: hashedPassword});
    await user.save();

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    return {token};
};

exports.login = async (payload) => {
    const { email, password } = payload;

    if (!email || !password) {
        throw new Error('All fields are required');
    }

    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid email or password');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid password');
    }

    const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    return {token};
};