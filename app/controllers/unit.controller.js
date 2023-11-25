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

const addUnitContent = async(req, res, next)=>{
    try{
        
        const {uid, uContent} = req.body
        await unitRepo.addContent(uContent, uid)
        return successResponse(res, {message:"added conternt", data:{uContent, uid}})
    }catch(error){
        console.log(error)
    }
}

const getUnitContent = async(req, res, next)=>{
    try{
        const {uid} = req.query
        const unitObject = await unitRepo.getUnit(uid)
        return successResponse(res, {message:"retrived unit", data: unitObject})

    }catch(error){
        console.log(error)
    }
}


module.exports={addUnit, addUnitContent, getUnitContent}