const { Router } = require("express");
const userRouter = Router();
//Handlers para cada endpoint
const { loginHandler,
        getUsersHandler,
        postUserHandler,
        putUserHandler,
        deleteUserHandler,
        getUsersDeletedHandler,
        restoreUserHandler} = require("../handlers/usersHandlers");

//Endpoints
userRouter.post('/login', loginHandler);
userRouter.get('/', getUsersHandler);
userRouter.post('/', postUserHandler);
userRouter.put('/:id', putUserHandler);
userRouter.delete('/:id', deleteUserHandler);
userRouter.get('/deleted', getUsersDeletedHandler);
userRouter.put('/restore/:id', restoreUserHandler);

module.exports = userRouter