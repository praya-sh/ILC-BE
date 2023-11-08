const express = require("express");
const eController = require("../controllers/eService.controller")


const eRouter = express.Router();

eRouter.post('/', eController.sendEmail)
eRouter.get('/add',eController.pushEcollection)
eRouter.get('/list', eController.listEcollection)


module.exports = eRouter;
