require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./db/index.js");
const authorRoutes = require("./routes/author.routes.js");
const getTopAuthors = require("./controllers/author.controller.js");
const port = 8080;


app.use(express.urlencoded({extended: true}));


app.use("/api/author", authorRoutes);


connectDB()
.then(() => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err);
})

app.get("/", (req, res) => {
    res.send("server is working");
})

app.listen(port, () => {
    console.log(`App is listening on port ${process.env.port || port}`);
})
