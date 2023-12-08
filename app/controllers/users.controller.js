const {successResponse, errorResponse, createdResponse, badRequestResponse, forbiddenResponse} = require('../helpers/responseHelpers')
const usersModel = require("../db/models/users.model")
const usersRepo = require("../db/repository/users.repository")
const achievemntRepo = require("../db/repository/achievements.repository")
const quizController = require("./quizes.controller")
const quizRepo = require("../db/repository/quizes.repository")

const { parseUserObject } = require('../helpers/userHelper')
const listUsers = async(req,res,next)=>{
    const usersList = await usersRepo.getUsers()
    return successResponse(res,{message:'Users listed successfully',data:usersList})
}

const saveUser = async(req,res,next)=>{
    try{
    
    const userData = {...req.body}
    const parsedUser = await parseUserObject(userData)
    if(!userData.uid)
            throw new Error(`Invalid uid ${userData.uid} `);
    const userExists = await usersRepo.findUser(userData.uid)   
    console.log(userExists)
    if(userExists){
        
        return successResponse(res, {message:"User already exists", data:parsedUser})
    }else{
         await usersRepo.addNewUser(parsedUser)
        return createdResponse(res, {messaage:`${parsedUser.email} saved`, data:parsedUser})
    }
    }catch(error){
        return errorResponse(res, {message:error?.message, error})
    }
}

const addExp = async(req, res, next)=>{
    const {exp, uid} = req.body
    if(!uid || !exp)
    return forbiddenResponse(res,{})
    await usersRepo.addExptoUser(uid, exp)
    return successResponse(res,{message:`${exp} points added successfully`, data: {uid,exp}});
}

const getUserExpInfo = async(req, res, next)=>{
    try{
        const {uid} = req.query
        if(!uid)
            return forbiddenResponse(res,{message:'Valide uid required'})
        const userObject = await usersRepo.findUser(uid)
        if(userObject===null || !userObject)
            return badRequestResponse(res,{message:'Invalid user'})
        const userTotalExperiencePoints = userObject.expPoints ? userObject.expPoints : 0
        const userExperiencLevel = (userTotalExperiencePoints!==0) ? Math.floor(userTotalExperiencePoints/10) : 0;
        const userExperiencePoints = (userTotalExperiencePoints!==0) ? userTotalExperiencePoints%10 : 0;
        return successResponse(res, {
            message:'User experience info retrieved', 
            data:{
                totalExperiencePoints:userTotalExperiencePoints,
                currentExperienceLevel:userExperiencLevel,
                currentExperiencePoints:userExperiencePoints
            }
        })
    }
    catch(error){
        return errorResponse(res,{error})
    }
}

const userCompletesUnit = async(req, res, next) =>{
    try{
        const{userId, unitId} = req.body
        await usersRepo.completeUnit(userId, unitId)
        return successResponse(res, {message:"Unit Completed",data: {userId, unitId}})
    }catch(error){
        console.log(error)
    }
}

const userCompletesQuiz = async(req, res, next)=>{
    try{
        const {userId, quizId, quizAns} = req.body
        const qans = await quizRepo.getQuizAns(quizId)
        if(qans == quizAns ){
            await usersRepo.completeQuiz(userId, quizId)
            return successResponse(res,{message:"correct answer", data:true})
        }

        
        else{
            return successResponse(res, {message:"User did not complete quiz", data:quizAns})

        }
    }catch(error){
        console.log(error)
    }
}

module.exports = {listUsers,saveUser, addExp, getUserExpInfo, userCompletesUnit, userCompletesQuiz}