const express = require("express");

const middlewares = require("./middlewares");

const app = express();
const fs = require("fs");

app.use(express.json());

// https://stackoverflow.com/questions/10695629/what-is-the-parameter-next-used-for-in-express
app.get("/listUsers", (req, res, next) => {
    fs.readFile(__dirname + "../../data" + "/users.json", "utf8", (err, data) => {
        res.json(data);
    })
})

app.get('/:id', function (req, res, next) {
    fs.readFile(__dirname + "../../data" + "/users.json", "utf8", function (err, data) {
        const users = JSON.parse(data);
        const user = users["user" + req.params.id]
        res.json(user);
    })
})

app.use("/api", require("./api"));

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
