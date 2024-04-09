const { Router } = require('express');
const recetsRouter = require("./recetsRouter.js")
const router = Router();

router.use("/recets", recetsRouter);


module.exports = router;
