const courseRepo = require("../db/repository/courses.repository")
const { parseCourseUnit } = require("../helpers/courseHelper")
const {successResponse, errorResponse, createdResponse} = require('../helpers/responseHelpers')


const addCourse = async(req, res, next) =>{
    try{
    const courseData = {...req.body}
    //const parsedUser = await parseUserObject(courseData)

    
        await courseRepo.addNewCourse(courseData)
        return createdResponse(res, {messaage:`course saved`, data:courseData})
    
    }catch(error){
        console.log(error)
    }
}

const listCourses = async(req, res, next)=>{
    const courseList = await courseRepo.getCourses();
    return successResponse(res,{message:"Courses listed successfully", data:courseList})

}

const listCourseUnits = async(req, res, next)=>{
    // uid = "J8LZcwKPmdBMZEcRAOt9"
    const {courseId} = req.params
    if(!courseId)
        return errorResponse(res, {message:`Invalid course id ${courseId}`, data:courseId})    
    const courseUnitList = await courseRepo.getCourseUnits(courseId)
    
    return successResponse(res, {message:"Course units listed successfilly", data:courseUnitList})
}

module.exports={addCourse, listCourses, listCourseUnits}