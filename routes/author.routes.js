const express = require('express');
const authorController = require("../controllers/author.controller.js");

const router = express.Router();

router.get("/top-authors", authorController.getTopAuthors);

module.exports = router;