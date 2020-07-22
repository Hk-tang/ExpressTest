const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/listusers", (req, res, next) => {
    fs.readFile(__dirname + "../../../../data/" + "users.json", "utf8", (err, data) => {
        res.json(data);
    })
})

router.get("/:id", function (req, res, next) {
    fs.readFile(__dirname + "../../../../data/" + "users.json", "utf8", function (err, data) {
        const users = JSON.parse(data);
        const user = users["user" + req.params.id]
        res.json(user);
    })
})

module.exports = router;