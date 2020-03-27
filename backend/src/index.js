const express = require("express");
// const cors = require("cors");
const routes = require("./routes");

const app = express();

// app.use(cors());
app.use(express.json());
app.use(routes);

// ROta / Recurso

// Métodos HTTP:
// GET: Buscar uma informação do back-end
// POST: Criar
// PUT: Alterar
// DELETE: Deletar algo

// Tipos de parâmetros:
/**
 * Query: Parâmetros nomeados enviados na rota após "?"
 * Route Params: Parâmentros utilizados para identificar recursos
 * Request Body
 */

app.listen(3333);
