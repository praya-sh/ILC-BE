const {achievementCollection} = require("../models/achievements.model")

const addNewAchievement = async(achievementDetails) =>{
    try{
        const newDoc =  await achievementCollection.add(achievementDetails)
    }catch(error){
        console.log(error)
    }
}



module.exports = {addNewAchievement} 