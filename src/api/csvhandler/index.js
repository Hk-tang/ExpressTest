const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "API - csvhandler"
    });
});

router.use("/data", require("./csvhandler"));

module.exports = router;