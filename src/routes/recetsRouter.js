const { Router } = require("express");
const recetsRouter = Router();
//Handlers para cada endpoint
const { getRecetsHandler,
        getRecetsByIdHandler,
        postRecetsHandler,
        putRecetsHandler,
        deleteRecetsHandler,
        getRecetsDeletedHandler,
        restoreRecetsHandler} = require("../handlers/recetsHandlers");

//Endpoints
recetsRouter.get('/', getRecetsHandler);
recetsRouter.get('/:id', getRecetsByIdHandler);
recetsRouter.post('/', postRecetsHandler);
recetsRouter.put('/:id', putRecetsHandler);
recetsRouter.delete('/:id', deleteRecetsHandler);
recetsRouter.get('/deleted', getRecetsDeletedHandler);
recetsRouter.put('/restore/:id', restoreRecetsHandler);

module.exports = recetsRouter