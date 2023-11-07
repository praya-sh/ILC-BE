const express = require('express');
const eRouter = require("./eService.routes")
const userRouter = require("./users.routes")
// Single routing
const appRouter = express.Router();
 
appRouter.use('/users',userRouter)
appRouter.use('/eService', eRouter)
 
module.exports = appRouter;