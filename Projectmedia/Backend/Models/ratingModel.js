const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    number: String
})

const ratingModel = mongoose.model('ratings', ratingSchema);

module.exports = ratingModel;