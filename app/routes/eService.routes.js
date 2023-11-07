const express = require("express");
const eController = require("../controllers/eService.controller")


const eRouter = express.Router();

eRouter.get('/', eController.sendEmail)

module.exports = eRouter;
