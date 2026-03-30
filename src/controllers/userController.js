const User = require('../models/userModel');

// Function to register a new user
exports.register = (req, res) => {
    const { username, password } = req.body;
    // Logic to register a user
};

// Function to login a user
exports.login = (req, res) => {
    const { username, password } = req.body;
    // Logic to login a user
};
