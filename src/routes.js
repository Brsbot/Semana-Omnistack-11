const express = require('express');
const routes = express.Router();

routes.get('/', (request, response) => {

    r2 = response.json({
        evento: 'semana Omnistack 11.0',
        aluno: 'Breno',
        message: 'Hello World'
    });
    return r2
});


module.exports = routes;