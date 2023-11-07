const express = require('express');
const userController = require("../controllers/users.controller")
// Single routing
const userRouter = express.Router();
 
userRouter.get('/',userController.userTest)
 
module.exports = userRouter;