const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    original_url: {
        type: String,
        required: true
    },
    short_code: {
        type: String,
        required: true,
        unique: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Link', linkSchema);