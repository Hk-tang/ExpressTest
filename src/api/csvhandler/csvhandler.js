const express = require("express");
const fs = require("fs");

const router = express.Router();


router.get("/", (req, res) => {
    fs.readFile(__dirname + "../../../../data/" + "data.csv", "utf8", (err, data) => {
        const lines = data.split("\n");

        const result = [];

        const headers = lines[0].split(",");

        for(let i = 1; i < lines.length; i++) {
            let line = {};
            let currentline = lines[i].split(",");

            for (let j = 0; j < headers.length; j++) {
                line[headers[j]] = currentline[j];
            }
            result.push(line)
        }
        res.json(result);
    });
});

module.exports = router;