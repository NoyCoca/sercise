const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dietSchema = new Schema({

    gender: String,
    require: true,
})

module.exports = mongoose.model('Diet', dietSchema)