const express = require('express');
const courseController = require("../controllers/courses.controller")
const unitController = require("../controllers/unit.controller")
const quizController = require("../controllers/quizes.controller")

const courseRouter = express.Router();


courseRouter.post('/', courseController.addCourse)

courseRouter.post('/addUnit', unitController.addUnit)

courseRouter.get('/listCourses', courseController.listCourses)

courseRouter.get('/listCourseUnits/:courseId', courseController.listCourseUnits)//used params

courseRouter.post('/addUnitContent', unitController.addUnitContent)

courseRouter.get('/getUnitContent', unitController.getUnitContent)//used query

courseRouter.post('/addQuiz', quizController.addQuiz )

courseRouter.get('/getUnitQuizes', quizController.listQuizes)//used query


module.exports = courseRouter;