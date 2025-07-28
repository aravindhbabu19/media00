const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    first: String,
    last: String,
    contact: String,
    email: String,
    message:String
})

const Formmodel = mongoose.model('forms', formSchema);

module.exports = Formmodel;