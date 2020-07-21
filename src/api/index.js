const express = require("express");

const csvhandler = require("./csvhandler")

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'API - 👋🌎🌍🌏'
    });
});

router.use("/csvhandler", csvhandler);

module.exports = router;
