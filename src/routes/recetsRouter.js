const { Router } = require("express");
const recetsRouter = Router();
//Handlers para cada endpoint
const { getRecetsHandler } = require("../handlers/recetsHandlers");

//Endpoints
recetsRouter.get('/', getRecetsHandler);

module.exports = recetsRouter