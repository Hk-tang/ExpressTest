const express = require("express");
const fs = require("fs");

const router = express.Router();


router.get("/", (res, req) => {
    fs.readFile(__dirname + "../../../../data/" + "users.json", "utf8", (err, data) => {
        console.log(data);
        res.end(data);
    })
})

module.exports = router;