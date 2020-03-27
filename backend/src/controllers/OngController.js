const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async index(response) {
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  },
  async create(request, response) {
    const { email, name, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString("HEX");

    //   Insere na tabela ong
    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.json({ id });
  }
};
