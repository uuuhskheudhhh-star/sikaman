const Link = require('../models/linkModel');

// Function to create a short link
exports.createShortLink = (req, res) => {
    const { original_url } = req.body;
    // Logic to create a short link
};

// Function to redirect to original URL
exports.redirect = (req, res) => {
    const { code } = req.params;
    // Logic to find and redirect
};
