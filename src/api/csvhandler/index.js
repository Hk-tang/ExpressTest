const express = require("express");

const csvhandler = require("./csvhandler");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: 'API - csvhandler'
    });
});

router.use("/data", csvhandler);

module.exports = router;