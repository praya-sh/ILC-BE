const express = require('express');
const userController = require("../controllers/users.controller")
// Single routing
const userRouter = express.Router();
 
userRouter.get('/',userController.listUsers)
userRouter.post('/saveUser',userController.saveUser)
module.exports = userRouter;