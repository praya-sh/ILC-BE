const achievemntRepo = require("../db/repository/achievements.repository")
const {successResponse, errorResponse, createdResponse} = require('../helpers/responseHelpers')

const addAchievement = async(req, res, next)=>{
    try{
        const achievementData = {...req.body}
        await achievemntRepo.addNewAchievement(achievementData)
        return createdResponse(res, {message:`achievement saved`, data:achievementData})
    }catch(error){
        console.log(error)
    }
}

const listAchievements = async(req, res, next)=>{
    try{
        const achievementList = await achievemntRepo.listAllAchievements()
        return successResponse(res, {message:'achievements listed',data:achievementList})
    }catch(error){
        console.log(error)
    }
}


module.exports = {addAchievement, listAchievements}

