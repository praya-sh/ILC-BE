const {achievementCollection} = require("../models/achievements.model")

const addNewAchievement = async(achievementDetails) =>{
    try{
        const newDoc =  await achievementCollection.add(achievementDetails)
    }catch(error){
        console.log(error)
    }
}

const listAllAchievements = async()=>{
    try{
        const achievements = await achievementCollection.get();
        const achievementsArray = [];
        if(achievements){
            achievements.forEach((doc)=>{
                achievementsArray.push({
                    id: doc.id,
                    description:doc.data().description
                })
            });
        }
        JSON.stringify(achievementsArray)
        return achievementsArray
    }catch(error){
        console.log(error)
    }
}

module.exports = {addNewAchievement, listAllAchievements} 