const express = require('express');
const courseController = require("../controllers/courses.controller")
const unitController = require("../controllers/unit.controller")

const courseRouter = express.Router();


courseRouter.post('/', courseController.addCourse)

courseRouter.post('/addUnit', unitController.addUnit)

courseRouter.get('/listCourses', courseController.listCourses)

courseRouter.get('/listCourseUnits/:courseId', courseController.listCourseUnits)

courseRouter.post('/addUnitContent', unitController.addUnitContent)

courseRouter.get('/getCourseContent', unitController.getUnitContent)


module.exports = courseRouter;