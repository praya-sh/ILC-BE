const express = require('express');
const userController = require("../controllers/users.controller")
// Single routing
const userRouter = express.Router();
 
userRouter.get('/',userController.listUsers)
userRouter.post('/saveUser',userController.saveUser)
userRouter.post('/addExperience', userController.addExp)
userRouter.get('/getUserExperiece', userController.getExp)
userRouter.get('/getUserLevel',userController.updateUserLevel)
module.exports = userRouter;