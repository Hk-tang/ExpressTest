const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "API - 👋🌎🌍🌏"
    });
});

router.use("/csvhandler", require("./csvhandler"));
router.use("/jsonhandler", require("./jsonhandler"));

module.exports = router;
