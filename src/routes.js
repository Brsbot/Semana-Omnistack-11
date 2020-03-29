const express = require('express');
const routes = express.Router();

const ongCtrl = require('./controlers/OngControler');
const caseCtrl = require('./controlers/CaseControler');
const profCtrl = require('./controlers/ProfileControler');
const sessionCtrl = require('./controlers/SessionControler');

routes.get('/ongs', ongCtrl.index);
routes.post('/ongs', ongCtrl.create);

routes.get('/incidents', caseCtrl.index);
routes.post('/incidents', caseCtrl.create);
routes.delete('/incidents/:id', caseCtrl.delete);

routes.get('/profile', profCtrl.index);

routes.post('/sessions', sessionCtrl.create);

module.exports = routes;


/*
//Adding a new ONG

const connection = require('./database/connection');
const crypto = require('crypto');
const id = crypto.randomBytes(4).toString('HEX');
const {name, email, whatsapp, city, UF}  = {
    "name": "APAD_test",
    "email": "contato@apad.com.br",
    "whatsapp": "470000",
    "city": "Rio do Sul",
    "UF": "SC",
}
const {title, description, value, ong_id}  = {
    "title": "Primeiro teste",
    "description": "Detalhes do caso teste",
    "value": "55",
    "ong_id": "dbecc5ce",
}

async function ongins() {
    await connection('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    UF,
});
};
async function ins() {
    const [id] = await connection('incidents').insert({
    title,
    description,
    value,
    ong_id,
});
return id;
};
//ongins();
ins();
console.log(connection('incidents').select('*'));
*/