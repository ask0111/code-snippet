
const mongoose = require("mongoose");
const schema = require("./schema");

let CodeCollection = new mongoose.model('codecollection', schema);

module.exports = CodeCollection;