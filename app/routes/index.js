const express = require('express');
const userRouter = require("./users.routes")
// Single routing
const appRouter = express.Router();
 
appRouter.use('/users',userRouter)
 
module.exports = appRouter;