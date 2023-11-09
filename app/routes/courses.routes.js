const express = require('express');
const courseController = require("../controllers/courses.controller")

const courseRouter = express.Router();


courseRouter.post('/', courseController.addCourse)

module.exports = courseRouter;