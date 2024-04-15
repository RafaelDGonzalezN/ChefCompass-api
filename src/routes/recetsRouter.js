const { Router } = require("express");
const recetsRouter = Router();
//Handlers para cada endpoint
const { getRecetsHandler,
        postRecetsHandler,
        putRecetsHandler,
        deleteRecetsHandler,
        getRecetsDeletedHandler,
        restoreRecetsHandler} = require("../handlers/recetsHandlers");

//Endpoints
recetsRouter.get('/', getRecetsHandler);
recetsRouter.post('/', postRecetsHandler);
recetsRouter.put('/:id', putRecetsHandler);
recetsRouter.delete('/:id', deleteRecetsHandler);
recetsRouter.get('/deleted', getRecetsDeletedHandler);
recetsRouter.put('/restore/:id', restoreRecetsHandler);

module.exports = recetsRouter