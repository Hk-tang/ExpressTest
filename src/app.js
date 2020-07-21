const express = require("express");

const middlewares = require("./middlewares");
const api = require("./api")

const app = express();
const fs = require("fs");

app.use(express.json());

app.get("/listUsers", (req, res, next) => {
    fs.readFile(__dirname + "../../data" + "/users.json", "utf8", (err, data) => {
        console.log(data);
        res.json(data);
    })
})

app.get('/:id', function (req, res, next) {
    fs.readFile(__dirname + "../../data" + "/users.json", "utf8", function (err, data) {
        const users = JSON.parse(data);
        const user = users["user" + req.params.id]
        console.log(user);
        res.json(user);
    })
})

app.use("/api", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
