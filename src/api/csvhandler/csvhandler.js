const express = require("express");
const fs = require("fs");

const router = express.Router();


router.get("/", (req, res) => {
    fs.readFile(__dirname + "../../../../data/" + "users.json", "utf8", (err, data) => {
        console.log(data);
        res.json(data);
    });
});

module.exports = router;