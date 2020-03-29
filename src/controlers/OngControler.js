const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const get_ongs = await connection('ongs').select('*');
        return response.json(get_ongs);
    },

    async create(request, response) {
        const {name, email, whatsapp, city, UF}  = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            UF,
        });

        return response.json({ id });
    }
};