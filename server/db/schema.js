const mongoose = require("mongoose");

const schema = mongoose.Schema({
    input: {
        type: String
    },
    output:{
        type: String
    }
});

module.exports = schema;