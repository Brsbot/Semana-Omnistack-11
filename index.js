//npx create-react-app frontend

const express = require('express');
const app = express();

app.get('/', (request, response) => {

    r2 = response.json({
        evento: 'semana Omnistack 11.0',
        aluno: 'Breno',
        message: 'Hello World'
    });
    return r2
});

app.listen(3334);