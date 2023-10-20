const mongoose = require('mongoose');

const Data = mongoose.model('Data', new mongoose.Schema({
}, { strict: false }));

module.exports = Data;

