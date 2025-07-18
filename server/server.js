const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.port = 3000;
        this.routes();
    }

    routes() {
        this.app.use('/', require('../routes/nombreUsuario'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port:${this.port}`);
        });
    }
}

module.exports = Server;