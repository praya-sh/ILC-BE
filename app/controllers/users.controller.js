const {successResponse, errorResponse, createdResponse} = require('../helpers/responseHelpers')
const usersModel = require("../db/models/users.model")
const usersRepo = require("../db/repository/users.repository")
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
    
    const result = await usersRepo.addExptoUser(uid, exp)
    return successResponse(res,{message:'added successfully', data: result});
}
const getExp = async(req, res, next)=>{
    const {uId, exp} = req.params
    const userExp = await usersRepo.getUserExp(uId)
    return successResponse(res, {message:'found', data:userExp})
}

const updateUserLevel = async(req, res, next)=>{
    const {uid} = req.params
    const points = await usersRepo.getUserExp(uid)
    const result = await usersRepo.addNewUser(uid, points)
    return successResponse(res, {message:'user level shown', data:result})
}

module.exports = {listUsers,saveUser, addExp, getExp, updateUserLevel}