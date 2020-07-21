const app = require('./app');

const server = app.listen(3000, () => {
    const host = server.address().address
    const port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
});