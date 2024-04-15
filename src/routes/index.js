const { Router } = require('express');
const recetsRouter = require("./recetsRouter.js")
const usersRouter = require("./usersRouter.js")
const router = Router();

router.use("/recets", recetsRouter);
router.use("/users", usersRouter);


module.exports = router;
