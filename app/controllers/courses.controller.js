const courseRepo = require("../db/repository/courses.repository")
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

module.exports={addCourse}