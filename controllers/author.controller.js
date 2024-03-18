const Author = require("../models/author.model.js");

const getTopAuthors = async (req, res) => {
    try {
        const topAuthors = await Author.aggregate(
        [
        { $group: { _id: "$name",
        totalBooks: 
        { $sum: "$books" } } 
        },
        { $sort: { totalBooks: -1 } },
            { $limit: 5 }
        ]
        );
        res.json(topAuthors);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = getTopAuthors;