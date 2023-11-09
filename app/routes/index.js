const express = require('express');
const eRouter = require("./eService.routes")
const userRouter = require("./users.routes")
const courseRouter= require("./courses.routes")
// Single routing
const appRouter = express.Router();
 
appRouter.use('/users',userRouter)
appRouter.use('/eService', eRouter)
appRouter.use('/courses', courseRouter)
 
module.exports = appRouter;