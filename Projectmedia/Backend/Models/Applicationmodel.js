const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    date: String,
    message: String
})

const applicationModel = mongoose.model('Applications', applicationSchema);

module.exports = applicationModel;