const unitRepo = require("../db/repository/unit.repository")

const {successResponse, errorResponse, createdResponse} = require('../helpers/responseHelpers')

const addUnit = async(req, res, next) =>{
    try{
    const unitData = {...req.body}
    //const parsedUser = await parseUserObject(courseData)

    
        await unitRepo.addNewUnit(unitData)
        return createdResponse(res, {messaage:`unit saved`, data:unitData})
    
    }catch(error){
        console.log(error)
    }
}

module.exports={addUnit}