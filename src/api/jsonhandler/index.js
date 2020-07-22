const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "API - jsonhandler"
    });
});

router.use("/get", require("./jsonhandler"));

module.exports = router;