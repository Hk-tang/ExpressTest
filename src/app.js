const express = require("express");

const middlewares = require("./middlewares");

const app = express();

app.use(express.json());

// https://stackoverflow.com/questions/10695629/what-is-the-parameter-next-used-for-in-express
app.get("/", (req, res, next) => {
    res.json({
        message: "Home"
    });
});

app.use("/api", require("./api"));

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
