const express = require("express");
const app = express();
const fs = require("fs");

app.get("/listUsers", (req, res, next) => {
    fs.readFile(__dirname + "/data" + "/users.json", "utf8", (err, data) => {
        console.log(data);
        res.end(data);
    })
})

app.get('/:id', function (req, res, next) {
    fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
        const users = JSON.parse(data);
        const user = users["user" + req.params.id]
        console.log(user);
        res.end(JSON.stringify(user));
    })
})

const server = app.listen(3000, () => {
    const host = server.address().address
    const port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
});