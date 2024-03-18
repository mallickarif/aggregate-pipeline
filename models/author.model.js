const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },
    books: {
        type: Number,
        required: true
    },
},
);

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
