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



module.exports = {addAchievement}

