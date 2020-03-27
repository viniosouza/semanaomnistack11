const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");

// const connection = require("./database/connection");

const routes = express.Router();

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.post("/incidents", IncidentController.create);

module.exports = routes;
